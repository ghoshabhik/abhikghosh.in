import useSWR from 'swr'

import fetcher from '../lib/fetcher'

import LanguageChart from '../components/LanguageChart'

export default function GithubStats() {

    const { data } = useSWR(`/api/get-github-aggregated-stats`, fetcher, {refreshInterval: 1000})
    // console.log(data)

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-1
        my-10">
            <div className="p-3">{data ? <LanguageChart languages={data.laguages}/> : ''}</div>
            <div>Cards</div>
        </div>
    )
}
