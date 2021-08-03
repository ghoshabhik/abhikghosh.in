import Link from 'next/link'
import Image from 'next/image'


export default function AboutMe() {
    return (
        <div className="flex flex-col justify-center items-center">

        {/* Heading */}
        <div className="flex items-center w-full space-x-4 ">
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
            <span className="xl:text-3xl lg:text-2xl md:text-xl text-lg font-semibold tracking-tight inline">About Me</span>
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
        </div>
        {/* Grid */}
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5">
            <div className="xl:col-span-2 pr-8">
            <p className="text-gray-600 dark:text-gray-400 ">
            Hello again, This is Abhik. I am currently working as a Data Solution Architect - designing and building secure, highly scabale, fast data platforms to 
            cater to the ever growing need of data-driven organizations. <br />
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
            With the years of experience in building data solutions for customers in different domains across the world, I can offer the best practices,
            industry standards to: <br /> a. modernize an existing data platform or ,<br />b. implement data solution on latest technologies like Databricks and other cloud offereings.  
            
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-3">
            Designing a solution needs very specific knowledge and experience. Every organization has its own set of needs and that brings different problem sets to solve. 
            I am commited to help organizations achieve maximum benefits from their technology investments and push their IT operational boundaries. 
            I have helped several customers discovering their wealth in data, monitizing and setting up analytical platforms, in cloud migration journey and simplifying legacy systems integration while keeping their data and infrastructure secured than ever before. 
            Cost and resource optimization is and has always been a key focus area for me. </p>
            </div>
            <div className="hidden md:block">
            <Image src={"/static/images/ProfilePic.jpg"} width={400} height={600} fill={"responsive"} alt="Profile Photo" 
            className="object-cover rounded-lg h-full"
            />
            </div>
        </div>
    </div>
    )
  }
  