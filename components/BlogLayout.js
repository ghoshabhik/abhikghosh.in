import Link from 'next/link'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import useSWR from 'swr'

import { TwitterShareButton } from 'react-share'

import fetcher from '../lib/fetcher'
import Container from './Container'
import Comments from './Comments'


const editUrl = (slug) =>
  `https://github.com/ghoshabhik/abhikghosh.in/edit/main/data/blog/${slug}.mdx`;
// const discussUrl = (slug) =>
//   `https://mobile.twitter.com/search?q=${encodeURIComponent(
//     `https://leerob.io/blog/${slug}`
//   )}`;

export default function BlogLayout({ children, frontMatter }) {

  const { data : postData } = useSWR(`/api/post-page-view?id=${frontMatter.slug}`, fetcher)
  const { data } = useSWR(`/api/get-page-view?id=${frontMatter.slug}`, fetcher, {refreshInterval: 2000})

  return (
      <Container>
        <div className="h-36"></div>
      <div className="flex items-center justify-start space-x-4  w-full 
              border border-gray-300 dark:border-gray-700 
              rounded-lg py-10 px-2 md:px-10">
      <article className="flex flex-col justify-center items-start mx-auto mb-16 px-2 lg:px-0">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-2 mb-10 w-full">
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
          <div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            {/* <ViewCount slug={frontMatter.slug}/> */}
            {data? data.view + ' Views' : '--- Views'}
          </p>
          </div>
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
      <div className="fixed md:bottom-24 md:left-2 bottom-10 right-10">
          <TwitterShareButton url={`https://abhikghosh.in/article/${frontMatter.slug}`}>
          <div className="flex items-center space-x-3"> 
          <p className="hidden xl:block">Share on Twitter</p>
          <p className="hidden md:block"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg> 
          </p> 
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" className="md:h-10 md:w-10 h-7 w-7" fill="#3BA9EE" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg> 
          </p>
          </div>
          </TwitterShareButton>
      </div>
      </Container>
      
  );
}