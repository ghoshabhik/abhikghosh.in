import useSWR from 'swr'

import fetcher from '../lib/fetcher'
import { useState, useEffect } from 'react'



function ServicesRefresh(){

    const [error, setError] =useState('')
    const [loading, setLoading] =useState(false)

    const refreshInstagram = async () => {
        setLoading(true)
         const spotify = await fetch('/api/load-instagram-data')
         const spotifyData = await spotify.json() 
         console.log(spotifyData)
         setError('Instagram Service Refreshed Successfully...')
        setLoading(false)    
    }

    const refreshTwitter = async () => {
        setLoading(true)
         const spotify = await fetch('/api/load-twitter-data')
         const spotifyData = await spotify.json() 
         console.log(spotifyData)
         setError('Twitter Service Refreshed Successfully...')
        setLoading(false)    
    }

    const refreshSpotify = async () => {
        setLoading(true)
         const spotify = await fetch('/api/load-spotify-data')
         const spotifyData = await spotify.json() 
         console.log(spotifyData)
         setError('Spotify Service Refreshed Successfully...')
        setLoading(false)    
    }

    const refreshTodoist = async () => {
        setLoading(true)
         const todoist = await fetch('/api/load-todoist-data')
         const todoistData = await todoist.json() 
         console.log(todoistData)
         setError('Todoist Data Refreshed Successfully...')
        setLoading(false)    
    }

    

    return(
        <div className="border rounded-lg px-10 py-10">
        <div className="flex justify-center items-center space-x-2  w-full"> 
            <button className="border-2 border-websitedark-orange dark:border-websitedark-orange px-3 py-2 rounded-lg"
            onClick={refreshSpotify}>Refresh Spotify</button>
            <button className="border-2 border-websitedark-orange dark:border-websitedark-orange px-3 py-2 rounded-lg"
            onClick={refreshTwitter}>Refresh Twitter</button>
            <button className="border-2 border-websitedark-orange dark:border-websitedark-orange px-3 py-2 rounded-lg"
            onClick={refreshInstagram}>Refresh Instagram</button>
            <button className="border-2 border-websitedark-orange dark:border-websitedark-orange px-3 py-2 rounded-lg"
            onClick={refreshTodoist}>Refresh Todoist</button>
            
        </div>
        <p className="py-5 text-center">{loading ? 'Loading...' : error}</p>
        </div>
    )
}

export default function AdminSection({user}) {

    const [loggedInUser, setLoggedInUser] = useState('')

    useEffect(()=>{
        setLoggedInUser(user.id)
    })

    // const { data } = useSWR(`/api/get-spotify-toptracks`, fetcher, {refreshInterval: 1000})

    return (
        <> {
            loggedInUser ? <div className="w-full ">
                <ServicesRefresh />
            </div> : 
            <div className="w-full  px-3 py-2">
            <div className=" flex justify-center items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-gray-900"></div>
            </div>
        </div>
        }
        
        </>
    )
}
