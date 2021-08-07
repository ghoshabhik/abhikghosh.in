const functions = require("firebase-functions");
const admin = require('firebase-admin');

const axios = require('axios')

admin.initializeApp();


exports.blockSignup = functions.auth.user().onCreate(event => {
    return admin.auth()
      .updateUser(event.uid, {disabled: true})
      .then(userRecord => console.log(`Auto blocked user: ${userRecord.toJSON()}`))
      .catch(error => console.log(`Error auto blocking: ${error}`));
  });


  exports.loadGithubData = functions.https.onRequest( async (req, res) => {
  
    try {

        const userDataRef = admin.firestore().collection('github').doc('github_data')

        let resp = await axios.get('https://api.github.com/users/ghoshabhik')
        let respData = await resp.data
        const publicRepo = respData.public_repos
        const publicGists = respData.public_gists
        const followers = respData.followers
        const following = respData.following

        resp = await axios.get('https://api.github.com/users/ghoshabhik/starred')
        respData = await resp.data
        const stars = respData.length

        resp = await axios.get('https://api.github.com/users/ghoshabhik/repos')
        respData = await resp.data
        let repos = []
        let languages = []
        respData.map( repo => {
            repos.push({
                repo: repo.name,
                laguage: repo.language
            })
            languages.push(repo.language)
        })

        functions.logger.info(languages)

        const counts = {}
        languages.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 })

        await userDataRef.set({publicRepo, publicGists, followers, following, stars, repos, laguages: counts})

      res.status(200).json({
        publicRepo, publicGists, followers, following, stars, repos, laguages: counts
      })
    }catch(err){
        console.log(err)
      res.status(500).json(err);
    } 
  
  
//     functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
});


exports.scheduledGithubLoader = functions.pubsub.schedule('0 */12 * * *').onRun(async (context) => {
        
    const userDataRef = admin.firestore().collection('github').doc('github_data')

    let resp = await axios.get('https://api.github.com/users/ghoshabhik')
    let respData = await resp.data
    const publicRepo = respData.public_repos
    const publicGists = respData.public_gists
    const followers = respData.followers
    const following = respData.following

    resp = await axios.get('https://api.github.com/users/ghoshabhik/starred')
    respData = await resp.data
    const stars = respData.length

    resp = await axios.get('https://api.github.com/users/ghoshabhik/repos')
    respData = await resp.data
    let repos = []
    let languages = []
    respData.map( repo => {
        repos.push({
            repo: repo.name,
            laguage: repo.language
        })
        languages.push(repo.language)
    })

    functions.logger.info(languages)

    const counts = {}
    languages.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 })

    await userDataRef.set({publicRepo, publicGists, followers, following, stars, repos, laguages: counts})

    return null

})


exports.gitHubBlogWebHook = functions.https.onRequest( async (req, res) => {
  
    try {
        const response = await axios.get('https://api.github.com/repos/ghoshabhik/abhikghosh.in/git/trees/main?recursive=1')
        const commitData = await response.data

        let activitiesFromGithub = commitData.tree

        const blogsFromGitHub = activitiesFromGithub.filter(activity => activity.path.includes('data/blog/'))
        const projFromGitHub = activitiesFromGithub.filter(activity => activity.path.includes('data/snippet/'))

        const blogRef = admin.firestore().collection('blog_pages')
        const projRef = admin.firestore().collection('snippet_pages')
        
        blogsFromGitHub.map( async blog => {
            const docName = blog.path.split('/').pop()
            const docExists = await blogRef.doc(docName).get()
            if(!docExists.exists){
                await blogRef.doc(docName).set({
                    title: docName,
                    createdAt: admin.firestore.Timestamp.fromDate(new Date()) 
                })
            }
        })
        
        projFromGitHub.map( async proj => {
            const docName = proj.path.split('/').pop()
            const docExists = await projRef.doc(docName).get()
            if(!docExists.exists){
                await projRef.doc(docName).set({
                    title: docName,
                    createdAt: admin.firestore.Timestamp.fromDate(new Date()) 
                })
            }
        })


      res.status(200).json({msg : 'success', blogsFromGitHub, projFromGitHub})
    }catch(err){
        console.log(err)
      res.status(500).json(err);
    } 
  
});

exports.createActivity = functions.firestore.document('{collecId}/{docId}').onWrite( async (change, context) => {

    const collectionId = context.params.collecId
    const documentId = context.params.docId
    const data = change.after.data() 
    let activity = {}


    console.log(context.eventType)

    if(collectionId === 'books_reading'){
        activity = {
            message: `A new book : ${data.book.title} is added to the reading list`,
            collection: collectionId,
            document: documentId,
            createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            url: data.book.url
        }
        await admin.firestore().collection('activities').doc(collectionId+documentId).set(activity)
    }
    if(collectionId === 'snippet_pages'){
        activity = {
            message: `A code snippet : ${data.title.replace('.mdx','').replace('-',' ')} is added to the website`,
            collection: collectionId,
            document: documentId,
            createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            url: '/snippet/'+data.title.replace('.mdx','')
        }
        await admin.firestore().collection('activities').doc(collectionId+documentId).set(activity)
    }
    if(collectionId === 'blog_pages'){
        activity = {
            message: `An article :${data.title.replace('.mdx','').replace('-',' ')} is added to the website`,
            collection: collectionId,
            document: documentId,
            createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            url: '/article/'+data.title.replace('.mdx','')
        }
        await admin.firestore().collection('activities').doc(collectionId+documentId).set(activity)
    }
    if(collectionId === 'instagram'){
        activity = {
            message: `A new instagram post :${data.post.caption} added`,
            collection: collectionId,
            document: documentId,
            createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            url: data.post.permalink
        }
        await admin.firestore().collection('activities').doc(collectionId+documentId).set(activity)
    }
    if(collectionId === 'spotify_fav_playlist'){
        activity = {
            message: `Spotify playlist is refreshed`,
            collection: collectionId,
            document: documentId,
            createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            url: data.song.url
        }
        await admin.firestore().collection('activities').doc(collectionId+documentId).set(activity)
    }
    if(collectionId === 'twitter'){
        activity = {
            message: `A Tweet like: ${data.tweet.text}`,
            collection: collectionId,
            document: documentId,
            createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            url: data.tweet.tweet_url
        }
        await admin.firestore().collection('activities').doc(collectionId+documentId).set(activity)
    }
    return null


})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
