
import Container from "../components/Container"
import Experience from "../components/Experience"


export default function Resume() {

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

        <div className="xl:fixed xl:top-96 xl:right-10">
        <a href="https://drive.google.com/file/d/1Ks_tJOOYNaFbRRTUjfZKGgiqcEpKfPEo/view?usp=sharing"
        target="_blank" rel="noreferrer" className="text-center border-2 border-websitedark-orange dark:border-websitedark-orange px-3 py-2 rounded-lg" 
        >Download a Printable Version</a>
        </div>

        {/* Resume */}
        <div className="">
        <Experience />
        
        </div>
        
        </div>

       

      </Container>

  )
}

