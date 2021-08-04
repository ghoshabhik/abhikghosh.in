import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

function Tick(){
    return(
        <svg className="inline w-6 h-6 pb-1 text-green-500" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

// const dataArchitect = "<Tick /> Experience in Datawarehouse data modeling, ETL solution architecting, Apache Spark Streaming Data pipeline redesign. Tools evaluation for data platform modernization. Cloud integration and orchastration with Azure Data Factory, Databricks. Complete solution architecting for Metadata Magangement in Azure Data Catalog. Implementanting and securing consumption layer and Data APIs"
const dataEngineer = "Developed optimal data pipeline architecture for Datawarehouse solutions. Built infrastructure required for optimal extraction, transformation, and loading of data and Data APIs from a wide variety of data sources using SQL, No SQL and Azure technologies. Created data tools for analytics and data scientist team members. Optimized data delivery and re-designed infrastructure for greater scalability"
const applicationDev = "As I started my career as an application developer, I bring in a strong experience in Java Application Development with technologies like - Struts, Spring, Hibernate, Springboot."

function DataArchitect(){
    return(
        <div>
            <p>
            <Tick /> Data modeling, schema designing for new EDW - Azure Synapse, Teradata<br />
            <Tick /> Design of ETL/ELT solution - using Talend, Apache Databricks, Apache Kafka<br />
            <Tick /> Tools evaluation for Data Quality <br />
            <Tick /> Design Data Processing and Enrichment - Spring Batch, Python <br />
            <Tick /> Implementation of Metadata Management  <br />
            <Tick /> Cloud integration and orchastration - Azure Data Factory, Databricks <br />
            <Tick /> Implementantion and security of consumption layer and Data APIs <br />
            <Tick /> Implementation of Log Analytics solution
            </p>
        </div>
    )
}

function DataEngineer(){
    return(
        <div>
            <p>
            <Tick /> Development of data model and schema design  <br />
            <Tick /> Implementation of infrastructure required for Talend ETL/ELT <br />
            <Tick /> Implementation of Master Data Management <br />
            <Tick /> Building CI/CD Pipeline Sql Server, ETL Tool <br />
            <Tick /> Enabling search, data visualization - Elasticsearch, Kibana <br />
            <Tick /> Batch processing with Spring Batch <br />
            <Tick /> Handling Database Migration
            </p>
        </div>
    )
}

function ApplicationDev(){
    return(
        <div>
            <p>
            <Tick /> Development of Microservice based Web Applications - Spring Cloud, Spring boot  <br />
            <Tick /> Integration of third-party APIs <br />
            <Tick /> Implementation of Application security - Single Sign-On <br />
            <Tick /> Log Analytics and Monitoring Dashboard <br />
            <Tick /> Performance Tuning, JVM Profiling <br />
            <Tick /> Implementation of Integration platform - Apache Camel, Jbose Fuse 
            </p>
        </div>
    )
}


const UpArrow = () => {

    return (<div className=""><svg className="h-6 w-6" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" ><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg></div>)
}

export default function Experience() {

    const [selected, setSelected] = useState('dataArchitect')

    return (
        <div className="flex flex-col justify-center items-center w-full">

        {/* Heading */}
        <div className="flex items-center w-full space-x-4">
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
            <span className="md:text-4xl text-3xl font-semibold tracking-tight inline">Work Experience</span>
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
        </div>
        {/* Experience */}
        <div className="flex items-center justify-start w-full mt-16">
            <span className="md:text-xl text-lg font-semibold tracking-tight inline">Summary</span>
        </div>
        <div>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-5 w-full">
                <div className="xl:col-span-2"></div>
                <div className="border border-gray-300 dark:border-gray-700 
                rounded-lg px-2 py-5">
                {/* <div className="border-b-2 w-1/3 mx-auto mb-10 hidden xl:block"></div> */}
                <p className="">
                  <span className="block text-center font-semibold tracking-tight">Relevant Skills</span><br />
                  <span className="font-semibold">Data Warehouse/ Data Lake</span> - <span className="text-gray-600 dark:text-gray-400">Azure Synapse, Teradata, SQL Server DW</span><br/>
                  <span className="font-semibold">ETL/ ELT</span> - <span className="text-gray-600 dark:text-gray-400">Talend Big Data, SSIS</span><br/>
                  <span className="font-semibold">RDBMS/ No Sql</span> - <span className="text-gray-600 dark:text-gray-400">SQL Server, MongoDB</span><br/>
                  <span className="font-semibold">Stream Processing</span> - <span className="text-gray-600 dark:text-gray-400"> Spark Streaming, Apache Kafka</span><br/>
                  <span className="font-semibold">Batch Processing</span> - <span className="text-gray-600 dark:text-gray-400">Apache Spark, Spring Batch, Talend DI</span><br/>
                  <span className="font-semibold">Languages &amp; Frameworks</span> - <span className="text-gray-600 dark:text-gray-400">Java, Groovy, Python, Spring Boot, Spring Cloud, Flask</span><br/>
                  <span className="font-semibold">Search</span> - <span className="text-gray-600 dark:text-gray-400">Elasticsearch</span><br/>
                  <span className="font-semibold">Caching</span> - <span className="text-gray-600 dark:text-gray-400">Redis</span>
                </p>
                {/* <div className="border-b-2 w-1/3 mx-auto mt-10 hidden xl:block"></div> */}
            </div>
            </div>
        </div>
        {/* Roles */}
        <div className="flex items-center justify-start w-full mt-16">
            <span className="md:text-xl text-lg font-semibold tracking-tight inline">Roles &amp; Responsibilities</span>
        </div>
        <div className="flex justify-center mx-auto ">
            <div className="grid xl:grid-cols-4 grid-cols-1 gap-5 xl:h-72 w-full">
                <div className="flex xl:flex-col items-end justify-center xl:text-right space-x-2 ">
                    <div onClick={() => setSelected("dataArchitect")} className={selected === 'dataArchitect' ? 'text-websitedark-orange cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0 border-websitedark-orange' : 'cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0'}>Data Architect</div>
                    {/* <UpArrow /> */}
                    <div onClick={() => setSelected("dataEngineer")} className={selected === 'dataEngineer' ? 'text-websitedark-orange cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0 border-websitedark-orange' : 'cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0'}>Data Engineer</div>
                    {/* <UpArrow /> */}
                    <div onClick={() => setSelected("applicationDev")} className={selected === 'applicationDev' ? ' text-websitedark-orange cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0 border-websitedark-orange' : 'cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0'}>Application Developer</div>
                </div>
                <div className="xl:col-span-3 flex flex-col justify-around">
                    <p className="text-gray-600 dark:text-gray-400 ">
                        { selected === 'dataArchitect' ? <DataArchitect /> : selected === 'dataEngineer' ? <DataEngineer /> : <ApplicationDev /> }
                    </p>
                
                </div>
            </div>
        </div>
        
    </div>
    )
  }
  