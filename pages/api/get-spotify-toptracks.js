import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

  const fireStoreRef = admin.firestore().collection('spotify_top_tracks')
  if(req.method === 'GET'){
    try {
      const snap = await fireStoreRef.orderBy('createdAt', 'desc').get()
      const tracks = await snap.docs.map(doc => doc.data())
      return res.status(200).json(tracks)
    }catch(err){
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler