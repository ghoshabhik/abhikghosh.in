import useSWR from 'swr'
import Image from 'next/image'

import fetcher from '../lib/fetcher'

export default function Instagram() {

    const { data } = useSWR(`/api/get-instagram-data`, fetcher, {refreshInterval: 1000})
    // console.log(data?.tracks)

    return (
        <div className="border dark:border-gray-600 border-gray-200 rounded-md px-3 py-2 mt-5">
           <div className="flex space-x-2 items-center my-4 font-semibold">
           <p><svg xmlns="http://www.w3.org/2000/svg" fill="#D82B7C" className="h-6 w-6" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z"/></svg></p>
           <p>Recent from Instagram</p> 
           </div> 
           <div  className="grid grid-cols-3 gap-4">
           {data?.map( (post, index) => {
                    return(
                    
                        <div className="w-full rounded-md" key={index}>
                            <Image src={post.media_url} width={400} height={400}  className="w-full rounded-md"/>
                            <p className="text-center text-black dark:text-gray-100"><a href={post.permalink} rel="nofollow noreferrer"  target="_blank">{post.caption}</a></p>
                        </div>
                    )
            })}
            </div>
        </div>
    )
}
