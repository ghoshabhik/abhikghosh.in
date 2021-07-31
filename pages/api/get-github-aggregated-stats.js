
const  handler = async (req, res) => {

  if(req.method === 'GET'){
    try {
        let resp = await fetch('https://api.github.com/users/ghoshabhik')
        let respData = await resp.json()
        const publicRepo = respData.public_repos
        const publicGists = respData.public_gists
        const followers = respData.followers
        const following = respData.following

        resp = await fetch('https://api.github.com/users/ghoshabhik/starred')
        respData = await resp.json()
        const stars = respData.length

        resp = await fetch('https://api.github.com/users/ghoshabhik/repos')
        respData = await resp.json()
        let repos = []
        let languages = []
        respData.map( repo => {
            repos.push({
                repo: repo.name,
                laguage: repo.language
            })
            languages.push(repo.language)
        })

        console.log(languages)

        const counts = {}
        languages.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 })

      return res.status(200).json({
        publicRepo, publicGists, followers, following, stars, repos, laguages: langArr
      })
    }catch(err){
        console.log(err)
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    console.log('error')
    return res.end();
  }

}


export default handler