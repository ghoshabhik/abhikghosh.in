import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

import NavigationBar from './NavigationBar'
import Footer from './Footer'


export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Abhik Ghosh – Developer, architect, writer.',
    description: `A data solution architect, Cloud enthusiast and course creator.`,
    image: 'https://www.abhikghosh.in/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <div className="">
    <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.abhikghosh.in${router.asPath}`} />
        <link rel="canonical" href={`https://www.abhikghosh.in${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Abhik Ghosh" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@avik5324" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
        <meta property="article:published_time" content={meta.date} />
        )}
    </Head>
        <nav className="">
            <div className=" bg-blue-400" id="intro">
                <NavigationBar />
            </div>
        </nav>
        <main id="skip" className="
            xl:w-3/5 lg:w-4/5 mx-auto 
            px-2 lg:px-0">
            <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate :{
                opacity: 1
            }
            }}>
                {children}
            </motion.div>
            <Footer />
        </main>
    </div>
  );
}