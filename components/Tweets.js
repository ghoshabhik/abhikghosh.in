import useSWR from 'swr'

import fetcher from '../lib/fetcher'

export default function Tweets() {

    const { data } = useSWR(`/api/get-twitter-data`, fetcher, {refreshInterval: 1000})
    // console.log(data?.tracks)

    return (
        <div className=" border dark:border-gray-600 border-gray-200 rounded-md px-3 py-2">
           <div className="flex space-x-2 items-center my-4 font-semibold">
           <p><svg xmlns="http://www.w3.org/2000/svg" fill="#1D9BF0" className="h-6 w-6" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg></p>
           <p>Recent Likes from Twitter</p> 
           </div> 
           {data?.arr.map( (tweet, index) => {
                    return(
                    <div key={index} className="flex flex-col justify-between mb-4">
                        <p className="text-black dark:text-gray-100"><a href={tweet.tweet_url} rel="nofollow noreferrer"  target="_blank">{tweet.text}</a> - <span className="text-md text-gray-500 dark:text-gray-400">{tweet.author_name}</span></p>
                        
                    </div>)
            })}
        </div>
    )
}
