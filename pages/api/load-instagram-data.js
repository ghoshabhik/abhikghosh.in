import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {


  const token = process.env.INSTA_TOKEN
  const id = process.env.INSTA_ID
  const endpointURL = `https://graph.instagram.com/v11.0/${id}/media?fields=thumbnail_url,caption,media_url,permalink&access_token=${token}`

  const fireStoreRef = admin.firestore()
  if(req.method === 'GET'){
    try {

        const response = await fetch(endpointURL)

        const data = await response.json()

        console.log(data)

        if (data) {

            const feed = data.data.map( (item, index) => (
                {
                    caption: item.caption,
                    media_url: item.media_url,
                    permalink: item.permalink,
                    id: item.id
                }
            ))

            console.log('feed---', feed)
            const fireStoreRef = admin.firestore()
            
            feed.map(async post => {
              const docExists = await fireStoreRef.collection('instagram').doc(post.id).get()
              if(!docExists.exists){
                await fireStoreRef.collection('instagram').doc(post.id).set({post, createdAt: admin.firestore.Timestamp.fromDate(new Date())})
              }
            })    

            // let arobj = {
            //     arr: feed
            // }
                
            // await fireStoreRef.collection('instagram').doc('feed').set(arobj)
            
            return res.status(500).json(feed)
        }
    }catch(err){
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler