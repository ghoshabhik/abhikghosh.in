import useSWR from 'swr'

import fetcher from '../lib/fetcher'

import LanguageChart from '../components/LanguageChart'
import StatusCard from '../components/StatusCard'

export default function GithubStats() {

    const { data } = useSWR(`/api/get-github-aggregated-stats`, fetcher, {refreshInterval: 1000})
    // console.log(data)

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-1 align-middle md:w-3/4 mx-auto
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
        </div>
    )
}
