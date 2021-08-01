import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

  const fireStoreRef = admin.firestore().collection('instagram')
  if(req.method === 'GET'){
    try {
      const snap = await fireStoreRef.doc('feed').get()
      const posts = await snap.data()

      console.log(posts)
      return res.status(200).json(posts.arr.slice(0,3))
    }catch(err){
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler