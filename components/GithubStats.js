import useSWR from 'swr'

import fetcher from '../lib/fetcher'

import LanguageChart from '../components/LanguageChart'

export default function GithubStats() {

    const { data } = useSWR(`/api/get-github-aggregated-stats`, fetcher)

    return (
        <div className="">
            <LanguageChart />
        </div>
    )
}
