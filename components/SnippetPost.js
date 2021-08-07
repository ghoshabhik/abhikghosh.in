import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import useSWR from 'swr';
import fetcher from '../lib/fetcher'

const BlogPost = ({ title, summary, slug, image, gitHub, hosted }) => {


    const { data } = useSWR(`/api/get-page-view?id=${slug}`, fetcher, {refreshInterval: 2000})


    return (
        <motion.div className="
        cursor-pointer rounded-lg border border-gray-300 dark:border-gray-700
        bg-gray-50 dark:bg-gray-800 shadow-md"
        whileHover={{ borderColor: '#4B5563' }}
        transition={{ duration: .2 }}
        >
        <Link href={`/snippet/${slug}`}>
        <a>
            <div className="mb-8 w-full">
            <div className="flex flex-col justify-center ">

                <h4 className="font-bold tracking-tight px-3 py-3 text-xl rounded-t-lg 
                bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                {title}
                </h4>
                {/* <div className="w-full h-1 bg-gray-200 dark:bg-gray-700"></div> */}
                <p className="text-gray-500 px-3 text-sm mt-5">
                {`${data ? data?.view : '–––'} views`}
                </p>
                </div>
                <p className="font-base px-3 py-3 text-gray-800 dark:text-gray-300">{summary}</p>
                </div>
                
        </a>
        </Link>
        {/* <div className="flex justify-between items-center px-3 py-2 text-base text-gray-700 dark:text-gray-400">
                    <a href={gitHub}>GitHub Repo</a>
                    <a href={hosted}>Hosted URL</a>
        </div> */}
        </motion.div>
  );
};

export default BlogPost;