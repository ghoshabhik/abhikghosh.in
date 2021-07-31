import Link from 'next/link'
import { motion } from 'framer-motion'

import useSWR from 'swr';
import fetcher from '../lib/fetcher'

const BlogPost = ({ title, summary, slug }) => {


    const { data } = useSWR(`/api/get-page-view?id=${slug}`, fetcher, {refreshInterval: 2000})


    return (
        <Link href={`/article/${slug}`}>
        <motion.a className="w-full cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5 }}
        >
            <div className="mb-8 w-full">
            <div className="flex flex-col md:flex-row justify-between ">
                <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                {title}
                </h4>
                <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                {`${data ? data?.view : '–––'} views`}
                </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{summary}</p>
            </div>
        </motion.a>
        </Link>
  );
};

export default BlogPost;