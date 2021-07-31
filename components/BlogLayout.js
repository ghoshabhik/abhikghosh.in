import Link from 'next/link'
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import useSWR from 'swr';

import fetcher from '../lib/fetcher'
import Container from './Container'
import Comments from './Comments';


const editUrl = (slug) =>
  `https://github.com/ghoshabhik/nextjs-tailwind-full-personal-website/edit/main/data/blog/${slug}.mdx`;
// const discussUrl = (slug) =>
//   `https://mobile.twitter.com/search?q=${encodeURIComponent(
//     `https://leerob.io/blog/${slug}`
//   )}`;

export default function BlogLayout({ children, frontMatter }) {

  const { data : postData } = useSWR(`/api/post-page-view?id=${frontMatter.slug}`, fetcher)
  const { data } = useSWR(`/api/get-page-view?id=${frontMatter.slug}`, fetcher, {refreshInterval: 2000})

  return (
      <Container>
      <div className="flex items-center justify-start space-x-4 mt-20 
              border border-gray-300 dark:border-gray-700 
              rounded-lg py-10 px-2 md:px-10">
      <article className="flex flex-col justify-center items-start mx-auto mb-16 px-2 lg:px-0">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-10">
          <div className="flex items-center">
            <Image
              alt="Abhik Ghosh"
              height={24}
              width={24}
              src="/static/images/profile1.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Abhik Ghosh / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            {/* <ViewCount slug={frontMatter.slug}/> */}
            {data? data.view + ' Views' : '--- Views'}
          </p>
        </div>
        <div className="prose lg:prose-xl dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="mt-8">
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {/* <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `} */}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
        <div className="w-full flex justify-center my-10"><div className="w-1/2 border-b-4 dark:border-gray-600 border-gray-200"></div></div>
        
        
      </article>
      </div>
    
      <div className="flex flex-col items-center justify-start space-x-4 mt-20 
              border border-gray-300 dark:border-gray-700 
              rounded-lg py-10 px-2 md:px-10
              bg-blue-50 dark:bg-gray-800">
        <div className="flex tems-center justify-start space-x-4">
        <div className=" pt-2"><Image
                    alt="Abhik Ghosh"
                    height={60}
                    width={60}
                    src="/static/images/profile1.jpg"
                    className="rounded-full"
                    /></div>
                <div><p className=" text-gray-600 dark:text-gray-400 text-base">
                If you have any comment/ question about <span className="font-semibold">&apos;{frontMatter.title}&apos;</span>, please submit the form below. You may also write to me on abhik.ghosh5@gmail.com incase you do not want to login
                </p></div>
        </div>        
      <Comments />
      </div>

      </Container>
      
  );
}