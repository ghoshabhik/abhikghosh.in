import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

  const fireStoreRef = admin.firestore().collection('twitter')
  if(req.method === 'GET'){
    try {
      const snap = await fireStoreRef.orderBy('createdAt', 'desc').get()
      const tweets = await snap.docs.map(doc => doc.data())
      // console.log(tweets)
      return res.status(200).json(tweets)
    }catch(err){
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler