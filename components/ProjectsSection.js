import { useState } from 'react'

import ProjectCard from './ProjectCard'

const UpArrow = () => {

    return (<div className=""><svg className="h-6 w-6" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" ><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg></div>)
}

export default function ProjectSection({projects}) {


    return (
        <div className="flex flex-col justify-center items-center w-full">

        {/* Heading */}
        <div className="flex items-center w-full space-x-4">
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
            <span className="md:text-4xl text-3xl font-semibold tracking-tight inline">Projects</span>
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
        </div>
        {/* Project Section */}
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2 mt-20">
            {projects.map((project, index) => (
                <div key={index} className="">
                    <ProjectCard project={project}/>
                    </div>
            ))}
       </div>
        
    </div>
    )
  }
  

  