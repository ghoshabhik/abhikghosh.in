import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

function Dot(){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4 pb-1 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/></svg>
        // <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4 pb-1 text-green-500" fill="" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
    )
}

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
            <span className="md:text-4xl text-3xl font-semibold tracking-tight inline">Experience</span>
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
        </div>
        {/* Experience */}
        {/* <div className="flex items-center justify-start w-full mt-16 mb-5">
            <span className="md:text-xl text-lg font-semibold tracking-tight inline">Summary</span>
        </div> */}
        <div className="border border-gray-300 dark:border-gray-700 
        rounded-lg px-2 py-5 my-10 xl:w-4/5">
            {/* <div className="border-b-2 w-1/3 mx-auto mb-10 hidden xl:block"></div> */}
            <p className="block text-center font-semibold tracking-tight">Current Technologies</p>

            <div className="xl:px-10 px-2 mt-10">
            <span className="font-semibold">Data Warehouse/ Data Lake</span> - <span className="text-gray-600 dark:text-gray-400">Azure Synapse, Teradata, SQL Server DW</span><br/>
            <span className="font-semibold">ETL/ ELT</span> - <span className="text-gray-600 dark:text-gray-400">Talend Big Data, SSIS</span><br/>
            <span className="font-semibold">RDBMS/ No Sql</span> - <span className="text-gray-600 dark:text-gray-400">SQL Server, MongoDB</span><br/>
            <span className="font-semibold">Stream Processing</span> - <span className="text-gray-600 dark:text-gray-400"> Spark Streaming, Apache Kafka</span><br/>
            <span className="font-semibold">Batch Processing</span> - <span className="text-gray-600 dark:text-gray-400">Apache Spark, Spring Batch, Talend DI</span><br/>
            <span className="font-semibold">Languages &amp; Frameworks</span> - <span className="text-gray-600 dark:text-gray-400">Java, Groovy, Python, Spring Boot, Spring Cloud, Flask</span><br/>
            <span className="font-semibold">Search</span> - <span className="text-gray-600 dark:text-gray-400">Elasticsearch</span><br/>
            <span className="font-semibold">Caching</span> - <span className="text-gray-600 dark:text-gray-400">Redis</span>
            </div>

            {/* <div className="border-b-2 w-1/3 mx-auto mt-10 hidden xl:block"></div> */}
        
        </div>
            
        <p className="block text-center font-semibold tracking-tight">Role Progression</p>
        <div className="xl:w-4/5 mt-10">
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-5">
            <p className="font-semibold tracking-tight">Data Architect</p>
            <p className="font-semibold tracking-tight text-gray-500 dark:text-gray-400">October 2018 - Present</p>
            </div>
            <span>A US manufacturing customer needed to migrate a Teradata data warehouse to cloud to achieve immediate benefits of cost of ownership and scale. The 
                multi-cloud solution needed to migrate existing data warehouse, the metadata management framework, ingestion, consumption layers and 
                 security compliance. 
            </span>
            <ul className="mt-5">
                <li><Dot /> Lead a cloud migration of on-prem data warehouse to Azure Synapse with a projected 30% YoY cost reduction compared to on-prem solution</li>
                <li><Dot /> Architected and designed the migration plan, cloud infrastructure and data flow pipelines. Strategic solutioning of cloud asset spot and reserved pricing has 
                estimated cost reduction by more than 10% </li>
                <li><Dot /> Created plan for governance and utilization in data processing, analysis, data mining</li>
                <li><Dot /> Created Data Masking strategy for sensetive data</li>
                <li><Dot /> Defined Data Lake Metadata Management system and framework</li>
            </ul><br />
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-5">
            <p className="font-semibold tracking-tight">Data Engineer</p>
            <p className="font-semibold tracking-tight text-gray-500 dark:text-gray-400">May 2016 - October 2018</p>
            </div>
            <span>This major US aero manufacturer needed to bring several disparate data warehouses under a single Enterprise 
                data warehouse solution and cater to the downstream users from a single source of truth. This project was a strategic approach to 
                provide a common platform for several data scientists working in silos. This project also aimed to ease the data sourcing and extraction processes to
                it customers.
            </span>
            <ul className="mt-5">
                <li><Dot /> Developed process model of an Enterprise Data Warehouse</li>
                <li><Dot /> Implemented sourcing, transformation and extraction(ETL/ ELT)</li>
                <li><Dot /> Implemented a CICD based metadata process and framework</li>
                <li><Dot /> Developed organization standards, structure, nomenclature for the design of data warehouse elements</li>
                <li><Dot /> Implemented business rules using stored procedures, middleware and other data layer APIs</li>
            </ul><br />
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-5">
            <p className="font-semibold tracking-tight">Senior Application Developer</p>
            <p className="font-semibold tracking-tight text-gray-500 dark:text-gray-400">June 2011 - April 2016</p>
            </div>
            <span>A major US based P&amp;C Insurance company acquired three other smaller entities. This project unified three different
                IT platforms to the parent to offer a single product to the market. During this time hurricane Sandy caused a major 
                impact on the claims and audit system. 
            </span>
            <ul className="mt-5">
                <li><Dot /> Migrated different Technologies to SOA Based unified Java architecture</li>
                <li><Dot /> Implemented sing sign-on integration for application security</li>
                <li><Dot /> The unified new product helped drive the growth in sales upto 30% </li>
                <li><Dot /> Implemented an automated OCR functionality to remove manual verification of submitted contracts</li>
                <li><Dot /> Automated claims workflow to support increased audit requirements </li>
            </ul><br />
            <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center mb-5">
            <p className="font-semibold tracking-tight">Mainframe Engineer</p>
            <p className="font-semibold tracking-tight text-gray-500 dark:text-gray-400">October 2007 - May 2011</p>
            </div>
            <span>Policy Rating application maintenance and optimization for a US Property &amp; Casuality Insurance Customer. Policy term renewals 
                calculated on monthly 1k+ Mainframe jobs in production.  
            </span>
            <ul className="mt-5">
                <li><Dot /> Optimized 1k+ jobs down to 600 over a course of 2 years. This effectively reduced the maintenance cost by 50% in rating system</li>
                <li><Dot /> Developed CICS online transactional system for Agency Market for real time rates</li>
                <li><Dot /> Tuned 100+ JCLs, resulting 5K hours saving on monthly batches</li>
                <li><Dot /> Integrated enterprise applications with CICS SOAP Webservices, which helped monetize data for analytics</li>
            </ul>
        </div>

        <div className="border border-gray-300 dark:border-gray-700 
        rounded-lg px-2 py-5 my-10 xl:w-4/5">
            {/* <div className="border-b-2 w-1/3 mx-auto mb-10 hidden xl:block"></div> */}
            <p className="block text-center font-semibold tracking-tight">Accomplishments</p>

            <div className="xl:px-10 px-2 mt-5 pb-5">
            <span className="text-gray-600 dark:text-gray-400">Published whitepapers on : Search Optimization techniques, Data Cataloging in an multi cloud environment and ETL DevSecOps</span><br/> <br />
            <span className="text-gray-600 dark:text-gray-400">Volunteered for Vital Voice as an organizer of Seattle meetup. Vital Voice is a Washinton DC based non-profit org that works  in the areas of economic empowerment, women&apos;s political participation, and human rights. </span><br/>
            </div>

            {/* <div className="border-b-2 w-1/3 mx-auto mt-10 hidden xl:block"></div> */}
        
        </div>

        {/* Roles */}
        {/* <div className="flex items-center justify-start w-full mt-16">
            <span className="md:text-xl text-lg font-semibold tracking-tight inline">Roles &amp; Responsibilities</span>
        </div>
        <div className="flex justify-center mx-auto ">
            <div className="grid xl:grid-cols-4 grid-cols-1 gap-5 xl:h-72 w-full">
                <div className="flex xl:flex-col items-end justify-center xl:text-right space-x-2 ">
                    <div onClick={() => setSelected("dataArchitect")} className={selected === 'dataArchitect' ? 'text-websitedark-orange cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0 border-websitedark-orange' : 'cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0'}>Data Architect</div>

                    <div onClick={() => setSelected("dataEngineer")} className={selected === 'dataEngineer' ? 'text-websitedark-orange cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0 border-websitedark-orange' : 'cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0'}>Data Engineer</div>

                    <div onClick={() => setSelected("applicationDev")} className={selected === 'applicationDev' ? ' text-websitedark-orange cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0 border-websitedark-orange' : 'cursor-pointer xl:border-r-2 xl:border-b-0 border-b-2 xl:text-right py-5 xl:pr-5 pb-3 xl:pb-0'}>Application Developer</div>
                </div>
                <div className="xl:col-span-3 flex flex-col justify-around">
                    <p className="text-gray-600 dark:text-gray-400 ">
                        { selected === 'dataArchitect' ? <DataArchitect /> : selected === 'dataEngineer' ? <DataEngineer /> : <ApplicationDev /> }
                    </p>
                
                </div>
            </div>
        </div> */}
        
    </div>
    )
  }
  