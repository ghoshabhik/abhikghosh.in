import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

  const fireStoreRef = admin.firestore().collection('github')
  if(req.method === 'GET'){
    try {
      const snap = await fireStoreRef.doc('github_data').get()
      const data = await snap.data()
      return res.status(200).json(data)
    }catch(err){
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler