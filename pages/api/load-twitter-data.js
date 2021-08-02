import admin from '../../lib/firebaseAdmin'
import needle from 'needle';

const  handler = async (req, res) => {


  const token = process.env.TWITTER_BEARER_TOKEN;
  const id = "858753424271196162";
  const endpointURL = `https://api.twitter.com/2/users/${id}/liked_tweets`;
  const params = {
    "expansions": "author_id",
    "tweet.fields": "attachments,author_id,conversation_id,created_at,entities,geo,lang,public_metrics,referenced_tweets,source,text", // Edit optional query parameters here
    // "user.fields": "id,name,username,entities", // Edit optional query parameters here
    "max_results": 25
    
  };

  if(req.method === 'GET'){
    try {

        // const response = await fetch(TOKEN_ENDPOINT, {
        //     method: 'POST',
        //     headers: {
        //       Authorization: `Basic ${basic}`,
        //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        //       'User-Agent': 'My Twitter App v1.0.23',
        //       'Content-Length': 29,
        //       'Accept-Encoding': 'gzip'
        //     },
        //     body: 'grant_type=client_credentials'
        //   });
        // const token = await response.json()  

        // return res.status(500).json(token)


        const response = await needle("get", endpointURL, params, {
            headers: {
              "User-Agent": "v2LikedTweetsJS",
              authorization: `Bearer ${token}`
            },
          });

        // const allTweets = await response.body  

        if (response.body) {

            const tweets = response.body.data.map( tweet => (
                {
                    public_metrics: tweet.public_metrics,
                    lang: tweet.lang,
                    text: tweet.text,
                    tweet_id: tweet.id,
                    author_id: tweet.author_id
                }
            ))
            const authors = response.body.includes.users

            tweets.map((tweet,index) => {
                authors.map(author => {
                    if(author.id === tweet.author_id){
                        tweets[index].author_name = author.name 
                        tweets[index].author_username = author.username
                        tweets[index].tweet_url = `https://twitter.com/${author.username}/status/${tweet.tweet_id}`
                    }
                })
            })
            // console.log(tweets)
            const fireStoreRef = admin.firestore()

            // let myarr  =[{test: "name", test1: "tetstststs"},{test: "name1", test1: "tetstststs"},{test: "name3", test1: "tetstststs"}]
            
            // let tData  = [
            //     {
            //       public_metrics: undefined,
            //       lang: 'en',
            //       text: 'Remote working has converted all talent into global talent.' +
            //         '' +
            //         'If local companies won’t compete globally, they’ll lose top talent to global companies who’ll hire locally.',
            //       tweet_id: '1421787342025596930',
            //       author_id: '32332988',
            //       author_name: 'Kunal Shah',
            //       author_username: 'kunalb11',
            //       tweet_url: 'https://twitter.com/kunalb11/status/1421787342025596930'
            //     },
            //     {
            //       public_metrics: undefined,
            //       lang: 'en',
            //       text: 'Sunset at Indian Rocks Beach today. ' +
            //         '' +
            //         'Testing my new 77mm ND filter, edited on Lunimar 4 https://t.co/AQrNfj4ZY3',
            //       tweet_id: '1421652814212870144',
            //       author_id: '358464377',
            //       author_name: 'Antonio Paris',
            //       author_username: 'AntonioParis',
            //       tweet_url: 'https://twitter.com/AntonioParis/status/1421652814212870144'
            //     }
            //   ]
            
            // let arobj = {
            //     arr: tweets
            // }

            tweets.map( async tweet => {
              const docExists = await fireStoreRef.collection('twitter').doc(tweet.tweet_id).get()
              if(!docExists.exists){
                await fireStoreRef.collection('twitter').doc(tweet.tweet_id).set({tweet, createdAt: admin.firestore.Timestamp.fromDate(new Date())})
              }
            })
                
            // await fireStoreRef.collection('twitter_data').doc('liked').set(arobj)
            
        
            return res.status(500).json(tweets)
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