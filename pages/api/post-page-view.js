import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

  const fireStoreRef = admin.firestore().collection('views')
  if(req.method === 'GET'){
    try {
      const snap = await fireStoreRef.doc(req.query.id).get()
      const views = await snap.data()
      let view
      if(!views){
        view = 0
      } else {
        view = views.view
      }

      await fireStoreRef.doc(req.query.id).set({
        view:view+1
      }, {merge: true})
      
      return res.status(200).json({msg : 'added view'})
    }catch(err){
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler