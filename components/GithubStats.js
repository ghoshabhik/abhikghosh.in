import useSWR from 'swr'

import fetcher from '../lib/fetcher'

import LanguageChart from '../components/LanguageChart'
import StatusCard from '../components/StatusCard'

export default function GithubStats() {

    const { data } = useSWR(`/api/get-github-aggregated-stats`, fetcher, {refreshInterval: 1000})
    // console.log(data)

    return (

        <div className="grid md:grid-cols-2 grid-cols-1 gap-1 md:w-3/4 mx-auto
        my-10">
            <div className="p-3">{data ? <LanguageChart languages={data.laguages}/> : '---'}</div>
            <div className="
            border border-gray-300 dark:border-gray-700 border-b-gray-300 dark:border-b-gray-700 
            rounded-md pt-8">
                <div><StatusCard name={'Public Repos'} count={data ? data.publicRepo : '---'}/></div>
                <div><StatusCard name={'Public Gists'} count={data ? data.publicGists : '---'}/></div>
                <div><StatusCard name={'Followers'} count={data ? data.followers : '---'}/></div>
                <div><StatusCard name={'Following'} count={data ? data.following : '---'}/></div>
                <div><StatusCard name={'Starred Repo'} count={data ? data.stars : '---'}/></div>
            </div>
            {/* <div className="fixed md:bottom-24 md:left-2 bottom-10 right-10">
                
                <a href="https://github.com/ghoshabhik" rel="nofollow noreferrer" target="_blank">
                <div className="flex items-center space-x-3">
                <p className="hidden xl:block">My Github account</p>
                <p className="hidden md:block"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg></p>
                <p className="md:h-10 md:w-10 h-7 w-7"><svg xmlns="http://www.w3.org/2000/svg"  fill="#3BA9EE" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg></p>
                </div>
                </a>
                
            </div> */}

        </div>
    )
}
