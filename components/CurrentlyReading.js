import useSWR from 'swr'
import Image from 'next/image'

import fetcher from '../lib/fetcher'

export default function CurrentlyReading() {

    const { data } = useSWR(`/api/get-book-data`, fetcher, {refreshInterval: 1000})
    

    return (
        <div className=" border dark:border-gray-600 border-gray-200 rounded-md px-3 py-2 mb-3">
            {/* <Image src={"/static/blog/books.jpg"} width={"640"} height={"398"} className="rounded-t-md"/> */}
           <div className="flex space-x-2 items-center my-4 font-semibold">
           <p><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#133968" viewBox="0 0 24 24"><path d="M15 12h-10v1h10v-1zm-4 2h-6v1h6v-1zm4-6h-10v1h10v-1zm0 2h-10v1h10v-1zm0-6h-10v1h10v-1zm0 2h-10v1h10v-1zm7.44 10.277c.183-2.314-.433-2.54-3.288-5.322.171 1.223.528 3.397.911 5.001.089.382-.416.621-.586.215-.204-.495-.535-2.602-.82-4.72-.154-1.134-1.661-.995-1.657.177.005 1.822.003 3.341 0 6.041-.003 2.303 1.046 2.348 1.819 4.931.132.444.246.927.339 1.399l3.842-1.339c-1.339-2.621-.693-4.689-.56-6.383zm-6.428 1.723h-13.012v-16h14v7.894c.646-.342 1.348-.274 1.877.101l.123-.018v-8.477c0-.828-.672-1.5-1.5-1.5h-15c-.828 0-1.5.671-1.5 1.5v17c0 .829.672 1.5 1.5 1.5h13.974c-.245-.515-.425-1.124-.462-2z"/></svg></p>
           <p>Currently Reading</p> 
           </div> 
           {data?.map((book, index) => {
                    return(
                    <div key={index} className="flex justify-between mb-2">
                        <p className="text-black dark:text-gray-100"><a href={book.book.url} rel="nofollow noreferrer" target="_blank">{book.book.title}</a>  <span className="text-md text-gray-500 dark:text-gray-400"> by {book.book.author}</span></p>
                        
                    </div>)
            })}
        </div>
    )
}
