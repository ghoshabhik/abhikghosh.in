import Link from 'next/link'
import Image from 'next/image'




export default function AboutMe() {
    return (
        <div className="flex flex-col justify-center items-center  py-auto">

        {/* Heading */}
        <div className="flex items-center w-full space-x-4 ">
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
            <span className="md:text-4xl text-3xl font-semibold tracking-tight inline">About Me</span>
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
        </div>
        {/* Grid */}
        <div className="mt-10">
        <p className="">
                Hello again, This is Abhik. I am currently working as a Data Solution Architect - designing and building secure, highly scabale, fast data platforms to 
                cater to the ever growing need of data-driven organizations. <br /><br />
                </p>
                <p className="">
                With the years of experience in building data solutions for customers in different domains across the world, I can offer the best practices,
                industry standards to: <br /> a. modernize an existing data platform or ,<br />b. implement data solution on latest technologies like Databricks and other cloud offereings.  
                </p>
        </div>
        
    </div>
    )
  }
  