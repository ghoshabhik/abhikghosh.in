import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

import ThemeSwitcher from './ThemeSwitcher'


export default function NavigationBar() {

    const [ mobileMenu, setMobileMenu ] = useState(false)

    return (
      <div className="
      fixed w-full z-20 
      border-b border-gray-300 dark:border-gray-700
      px-2 lg:px-0
      backdrop-filter backdrop-blur-md"
      onClick={ () => mobileMenu && setMobileMenu(!mobileMenu)}
      >
        <div className="
          flex flex-row items-center justify-between
          xl:w-3/5 lg:w-4/5 mx-auto
          py-3 md:py-2 
          ">
          {/* Logo */}
          <div className="">
            <Link href='/' passHref>
                <a 
                className="
                flex 
                items-center 
                cursor-pointer">
                <Image 
                src="/static/images/profile1.jpg"
                width={48}
                height={48}
                className="inline object-cover w-12 h-12 rounded-full"
                alt="Abhik Ghosh - Profile Photo"
                /> 
                </a>
            </Link>
          </div>
          <div className="flex items-center space-x-2 font-semibold">
            {/* Nav Links */}
            <div className="md:flex md:space-x-5 hidden">
              <Link href="/" passHref><a>Home</a></Link>
              <Link href="/resume" passHref><a>My Resume</a></Link>
              {/* <Link href="/snippet" passHref><a>Snippets</a></Link>
              <Link href="/article" passHref><a>Articles</a></Link> */}
              <Link href="/recents" passHref><a>Dash</a></Link>
            </div>
            
            <div className="flex space-x-2 items-center">
              {/* Switch - Theme */}
              <ThemeSwitcher />

              {/* Control for Mobile Menu */}
              <div className="md:hidden" onClick={ () => setMobileMenu(!mobileMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu HERE */}
        { mobileMenu && 
        <div>
          <div className="flex flex-col
          space-y-2 px-5 pb-2
          text-right font-semibold">
            <Link href="/" passHref><a>Home</a></Link>
            <Link href="/resume" passHref><a>My Resume</a></Link>
            {/* <Link href="/snippet" passHref><a>Snippets</a></Link>
            <Link href="/article" passHref><a>Articles</a></Link> */}
            <Link href="/recents" passHref><a>Dash</a></Link>
          </div>
        </div> }
      </div>
    )
  }
  