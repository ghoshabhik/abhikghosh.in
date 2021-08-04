import Link from 'next/link'
import Image from 'next/image'


function Uni(){
    return(
        <svg className="inline w-6 h-6 pb-1 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
    )
}

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
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-5 mt-10">
            <div className="xl:col-span-2 pr-8 text-left">
                <p className="">
                Hello again, This is Abhik. I am currently working as a Data Solution Architect - designing and building secure, highly scabale, fast data platforms to 
                cater to the ever growing need of data-driven organizations. <br /><br />
                </p>
                <p className="">
                With the years of experience in building data solutions for customers in different domains across the world, I can offer the best practices,
                industry standards to: <br /> a. modernize an existing data platform or ,<br />b. implement data solution on latest technologies like Databricks and other cloud offereings.  
                
                </p>
                <p className="mt-3">
                Love for programming begun at an early age with <a className="text-websitedark-orange font-semibold" href="https://en.wikipedia.org/wiki/Antitrust_(film)" target="_blank"
                rel="noreferrer"
                >Antitrust</a>, a childhood movie, fascinated with Milo&apos;s character I kept spending hours on computer - mostly playing games though.
                Real learning started in my GWBasic, QBasic class. Then things became serious! Always loved the ability to solve world&apos;s biggest problems from the corner of a garage :) 
                </p>
            </div>
            {/* <div className="hidden xl:block">
                <Image src={"/static/images/ProfilePic.jpg"} width={400} height={600} fill={"responsive"} alt="Profile Photo" 
                className="object-cover rounded-lg h-full"
                />
            </div> */}
            <div className="border border-gray-300 dark:border-gray-700 
                rounded-lg px-2 xl:pt-8 py-5">
                <div className="border-b-2 w-1/3 mx-auto mb-10 hidden xl:block"></div>
                <p className="">
                  <Uni /> <span className="font-semibold">Bachelor of Technology in Electrical Engineering(2003 - 2007)</span> - <a href="https://makautwb.ac.in/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400">West Bengal University of Technology, Kolkata</a><br/><br />
                  <Uni /> <span className="font-semibold">Post Graduate Diploma in Data Science(2018 - 2019)</span> - <a href="https://www.iiitb.ac.in/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400">International Institute of Information Technology, Bangalore</a>
                </p>
                <div className="border-b-2 w-1/3 mx-auto mt-10 hidden xl:block"></div>
            </div>
        </div>
    </div>
    )
  }
  