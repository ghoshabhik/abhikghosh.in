import admin from '../../lib/firebaseAdmin'
import querystring from 'querystring';


const  handler = async (req, res) => {

  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET  
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

  if(req.method === 'GET'){
    try {
      
        const response = await fetch(TOKEN_ENDPOINT, {
            method: 'POST',
            headers: {
              Authorization: `Basic ${basic}`,
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: querystring.stringify({
              grant_type: 'refresh_token',
              refresh_token
            })
          });

        const token = await response.json();


        const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

        const topTrackResults = await fetch(TOP_TRACKS_ENDPOINT, {
            headers: {
              Authorization: `Bearer ${token.access_token}`
            }
          })

        const { items } = await topTrackResults.json();

        const tracks = items.map((track) => ({
            artist: track.artists.map((_artist) => _artist.name).join(', '),
            songUrl: track.external_urls.spotify,
            title: track.name,
            id: track.id,
            popularity: track.popularity
        }));
        // console.log('tracks====',tracks)
        const fireStoreRef = admin.firestore()

        tracks.map( async song => {
          const docExists = await fireStoreRef.collection('spotify_top_tracks').doc(song.id).get()
          if(!docExists.exists){
            await fireStoreRef.collection('spotify_top_tracks').doc(song.id).set({song, createdAt: admin.firestore.Timestamp.fromDate(new Date())})
          }
        }) 

        // await fireStoreRef.collection('spotify').doc('tracks').set({
        //     tracks: tracks
        // })

        const playlist_id = '2S44HaMEmBDH5UyIO9N31D'
        const PLAYLIST_URL = `https://api.spotify.com/v1/playlists/${playlist_id}`

        const playListsResults = await fetch(PLAYLIST_URL, {
            headers: {
              Authorization: `Bearer ${token.access_token}`
            }
          })

        const doc = await playListsResults.json();

        const playListSongs = doc.tracks.items.map( item => ({
                artist: item.track.artists.map((_artist) => _artist.name).join(', '),
                track: item.track.name,
                url: item.track.external_urls.spotify,
                popularity: item.track.popularity,
                id: item.track.id
        }))
        // console.log('playlistSongs----',playListSongs)
        // const fireStoreRef = admin.firestore()

        playListSongs.map( async song => {
          const docExists = await fireStoreRef.collection('spotify_fav_playlist').doc(song.id).get()
          if(!docExists.exists){
            await fireStoreRef.collection('spotify_fav_playlist').doc(song.id).set({song, createdAt: admin.firestore.Timestamp.fromDate(new Date())})
          }
        })  

        // await fireStoreRef.collection('spotify').doc('playlist_tracks').set({
        //     tracks: playListSongs
        // })  

        return res.status(200).json({ items, doc });

    }catch(err){
        console.log(err)
      return res.status(500).json(err);
    } 
  }else {
    res.status(405);
    return res.end();
  }

}


export default handler