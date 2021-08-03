import Link from "next/link"

import { motion } from 'framer-motion'

import ProfileLinks from "../components/ProfileLinks"
import Container from "../components/Container"
import AboutMe from "../components/AboutMe"

export default function Home() {
  return (
    <div className="">
      <Container
      title="Home for Personal Website/ Developer Portfolio – Abhik Ghosh">
        {/* Hero Section */}
        <div className="flex flex-col space-y-5">
        <div className='relative' id="hero">
        <div className="flex flex-col justify-center xl:items-start space-y-4
        w-full min-h-screen 
        ">
          
          <p className="text-websitedark-orange dark:text-websitedark-orange text-xl">Hi, my name is</p>
          <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-bold tracking-tight">Abhik Ghosh.</h1>
          <h2 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold tracking-tight text-gray-400 dark:text-websitedark">Data Solution Architect.</h2>
          <p className="text-gray-600 dark:text-gray-400">Over 13 years of my experience in data engineering and software development is focussed on 
          empowering data-driven customer growth. Currently I am working on data warehouse design, cloud migration and modernization of data platforms.
          I have a deep passion towards clean code and efficient design techniques.</p>
          <div className="flex space-x-4 pt-10"> 
          <Link href="#contact" passHref>
            <motion.a className="bg-websitedark-orange dark:bg-websitedark-orange px-3 py-2 rounded-lg text-white"
            whileHover={{ scale : 1.05}}
            >Get in touch</motion.a>
          </Link>
          <Link href="#about" passHref>
            <motion.a className="border-2 border-websitedark-orange dark:border-websitedark-orange px-3 py-2 rounded-lg "
            whileHover={{ scale : 1.05}}
            >Resume</motion.a>
          </Link>
          </div>
          
           <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
            absolute right-1 bottom-10
           "><Link href="#about" passHref>
           <a className="flex space-x-2"
           ><span>More About Me</span> <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
         </Link></div>
        </div>
        </div>
        
        {/* About Me */}
        <div className='relative py-20  min-h-screen' id="about">
          <div className="flex flex-col justify-center items-center space-y-4
          ">
            <AboutMe />
            <div className="flex items-center justify-between">
              <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
              absolute left-1 bottom-10 
            "><Link href="#intro" passHref>
            <a className="flex space-x-2"
            ><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            <span>Intro</span>  </a>
            </Link></div>
                <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
                absolute right-1 bottom-10 
              "><Link href="#experience" passHref>
              <a className="flex space-x-2"
              ><span>My Work Ex</span> <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
            </Link></div>
         </div>
          </div>
        </div>

        {/* Experiences */}
        <div className='relative py-20  min-h-screen' id="experience">
          <div className="flex flex-col justify-center xl:items-start space-y-4
          
          ">
            Experiences Section
        
            <div className="flex items-center justify-between">
              <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
              absolute left-1 bottom-10
            "><Link href="#about" passHref>
            <a className="flex space-x-2"
            ><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            <span>About Me</span>  </a>
            </Link></div>
                <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
                absolute right-1 bottom-10
              "><Link href="#projects" passHref>
              <a className="flex space-x-2"
              ><span>My Projects</span> <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
            </Link></div>
         </div>
          </div>
        </div>

        {/* Projects */}
        <div className='relative py-20  min-h-screen' id="projects">
          <div className="flex flex-col justify-center xl:items-start space-y-4

          ">
            Projects Section
          
            <div className="flex items-center justify-between">
              <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
              absolute left-1 bottom-10
            "><Link href="#experience" passHref>
            <a className="flex space-x-2"
            ><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            <span>My Experience</span>  </a>
            </Link></div>
                <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
                absolute right-1 bottom-10
              "><Link href="#blog" passHref>
              <a className="flex space-x-2"
              ><span>Next on this website</span> <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
            </Link></div>
         </div>
          </div>
        </div>

        {/* Blog and Snippets */}
        <div className='relative py-20  min-h-screen' id="blog">
          <div className="flex flex-col justify-center xl:items-start space-y-4

          ">
            Blog and Snippets Section
           
            <div className="flex items-center justify-between">
              <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
              absolute left-1 bottom-10
            "><Link href="#projects" passHref>
            <a className="flex space-x-2"
            ><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            <span>My Projects</span>  </a>
            </Link></div>
                <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
                absolute right-1 bottom-10
              "><Link href="#contact" passHref>
              <a className="flex space-x-2"
              ><span>Get in Touch</span> <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg></a>
            </Link></div>
         </div>
          </div>
        </div>

        {/* Contact */}
        <div className='relative py-20  min-h-screen' id="contact">
          <div className="flex flex-col justify-center xl:items-start space-y-4

          ">
            Contact Section
            dsfsdfsdfsdfsdsdsdsdsdsdsdsds dsdsdsdsdsdsdsdsds dsdsdsdsdsdsdsdsdsdsdsdsdsd
            dsfsdfs dfsdfsdsdsdsdsdsdsdsdsd sdsdsdsd sdsdsdsdsdsdsdsdsds dsdsdsdsdsdsdsdsd
            dsfsdfsdf sdfsdsdsdsdsdsdsdsdsd sdsdsdsdsdsdsdsdsd sdsdsdsdsd sdsdsdsdsdsdsdsd
            dsfsdfsdfsdfsdsdsdsdsd sdsdsdsdsdsdsdsdsdsdsdsdsdsdsd sdsdsdsdsdsdsdsdsdsdsd
            dsfsdfs dfsdfsds dsdsdsdsdsdsdsdsdsds dsdsdsdsdsdsd sdsdsdsdsd sdsdsdsdsdsdsdsd
            dsfsdfsdfsdfsdsdsdsdsdsdsd sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsd sdsdsd
            dsfsdfs dfsdfsds dsdsdsdsdsdsdsdsdsd sdsdsdsdsdsds dsdsdsdsdsdsdsds dsdsdsdsdsd
            dsfsdf sdfsdfsdsdsdsds dsdsdsdsdsdsdsdsdsds dsdsd sdsdsdsdsdsdsdsdsds dsdsdsdsd
            <ProfileLinks />
            <div className="flex items-center justify-between">
              <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
              absolute left-1 bottom-10
            "><Link href="#blog" passHref>
            <a className="flex space-x-2"
            ><svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
            <span>On this website</span>  </a>
            </Link></div>
                <div className="font-bold tracking-tight text-gray-400 dark:text-websitedark
                absolute right-1 bottom-10
              "><Link href="#intro" passHref>
              <a className="flex space-x-2"
              ><span>To the top</span> <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg></a>
            </Link></div>
         </div>
          </div>
        </div>
        </div>
        
        
      </Container>
    </div>
  )
}
