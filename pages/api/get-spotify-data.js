import admin from '../../lib/firebaseAdmin'

const  handler = async (req, res) => {

  const fireStoreRef = admin.firestore().collection('spotify')
  if(req.method === 'GET'){
    try {
      const snap = await fireStoreRef.doc('playlist_tracks').get()
      const tracks = await snap.data()
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