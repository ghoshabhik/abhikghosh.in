import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

  const fireStoreRef = admin.firestore().collection('views')
  if(req.method === 'GET'){
    try {
      const snap = await fireStoreRef.doc(req.query.id).get()
      const views = await snap.data()
      if(!views) return res.status(200).json({view : 0})
      return res.status(200).json(views)
    }catch(err){
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler