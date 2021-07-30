import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import ThemeSwitcher from './ThemeSwitcher'


export default function NavigationBar() {
    return (
      <div className="
      fixed w-full z-20 
      border-b border-gray-300 dark:border-gray-700
      px-2 lg:px-0
      backdrop-filter backdrop-blur-md">
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
          <div className="flex items-center space-x-2">
            {/* Nav Links */}
            <motion.div className="md:flex md:space-x-5 hidden">
              <Link href="/" passHref>
                <motion.a 
                initial={{x: "100vw"}}
                animate={{x: 0}}
                transition={{ duration: .2, delay: .5 }}>Home
                </motion.a>
              </Link>
              <Link href="/project" passHref>
                <motion.a 
                initial={{x: "100vw"}}
                animate={{x: 0}}
                transition={{ duration: .2, delay: .6 }}>Project
                </motion.a>
              </Link>
              <Link href="/article" passHref>
                <motion.a 
                initial={{x: "100vw"}}
                animate={{x: 0}}
                transition={{ duration: .2, delay: .7 }}>Articles
                </motion.a>
              </Link>
              <Link href="/about" passHref>
                <motion.a 
                initial={{x: "100vw"}}
                animate={{x: 0}}
                transition={{ duration: .2, delay: .8 }}>About
                </motion.a>
              </Link>
            </motion.div>
            
            <div className="flex space-x-2 items-center">
              {/* Switch - Theme */}
              <ThemeSwitcher />

              {/* Control for Mobile Menu */}
              <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  