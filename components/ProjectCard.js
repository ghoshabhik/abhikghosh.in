import Image from 'next/image'

const UpArrow = () => {

    return (<div className=""><svg className="h-6 w-6" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" ><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg></div>)
}

export default function ProjectCard({project}) {


    return (
    <div className="">
        {/* <div className="xl:w-1/2 ">
        <Image src={project.image} height={500} width={800} fill="responsive" className="rounded-lg"/>
        </div> */}
        <div className="tracking-tight 
        dark:bg-gray-700 bg-gray-50 rounded-sm shadow-md px-2 py-4
        ">
            <p className="text-xl font-semibold">{project.title}</p>
            <p className="">{project.summary}</p>
        </div>

        {/* <div className="w-96 h-96 relative">
        <div className="absolute inset-0 bg-cover bg-center z-0 text-xl font-semibold text-white text-center" style={{backgroundImage: `url(${project.image})`}}>{project.title}</div>
        <div className="opacity-0 hover:opacity-100 hover:bg-gray-50 dark:hover:bg-gray-800 duration-300 absolute inset-0 z-10 flex justify-center items-center ">
            <div className="flex flex-col space-y-3 px-3 ">
            <p className="text-xl font-semibold ">{project.title}</p>
            <p className="text-base font-normal ">{project.summary}</p>
            </div>
        </div>
        </div> */}
        
    </div>
    )
  }
  

  