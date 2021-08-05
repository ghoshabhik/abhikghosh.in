import Link from "next/link"
import { useState } from 'react'

import { motion } from 'framer-motion'

import ProfileLinks from "../components/ProfileLinks"
import Container from "../components/Container"
import AboutMe from "../components/AboutMe"
import Experience from "../components/Experience"
import ProjectSection from "../components/ProjectsSection"
import SiteContentSection from "../components/SiteContentSection"
import ContactSection from "../components/ContactSection"

import { getAllFilesFrontMatter } from "../lib/mdx"

export default function Resume({projects}) {

  const [filteredProjects, setFilteredProjects] = useState(projects)

  return (
      <Container
      title="My Resume – Abhik Ghosh">
        <div className=" h-20 w-full"></div>
        <div className="flex flex-col space-y-5 w-full">
        
        {/* About Me */}
        <div className="mt-10">
        <h1 className="
            font-bold text-3xl md:text-5xl tracking-tight 
            mb-4 
            text-black dark:text-white">
              Resume
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
              {`I am currently working as a Data Solution Architect - designing and building secure, highly scabale, fast data platforms to 
                cater to the ever growing need of data-driven organizations. With the years of experience in building data solutions for customers in different domains across the world, I can offer the best practices,
                industry standards to modernize an existing data platform, and/or to implement data solution on latest technologies like Databricks and other cloud offereings.`}
            </p>
        </div>

        {/* Resume */}
        <div className="">
        <Experience />
        </div>
        
        </div>
      </Container>

  )
}


export async function getStaticProps() {
  const projects = await getAllFilesFrontMatter('projects');

  return { props: { projects } };
}