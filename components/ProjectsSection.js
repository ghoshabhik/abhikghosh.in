import Link from 'next/link'
import Image from 'next/image'

import { useState } from 'react'

const dataArchitect = "Experience in Datawarehouse data modeling, ETL solution architecting, Apache Spark Streaming Data pipeline redesign. Tools evaluation for data platform modernization. Cloud integration and orchastration with Azure Data Factory, Databricks. Complete solution architecting for Metadata Magangement in Azure Data Catalog. Implementanting and securing consumption layer and Data APIs"
const dataEngineer = "Developed optimal data pipeline architecture for Datawarehouse solutions. Built infrastructure required for optimal extraction, transformation, and loading of data and Data APIs from a wide variety of data sources using SQL, No SQL and Azure technologies. Created data tools for analytics and data scientist team members. Optimized data delivery and re-designed infrastructure for greater scalability"
const applicationDev = "As I started my career as an application developer, I bring in a strong experience in Java Application Development with technologies like - Struts, Spring, Hibernate, Springboot."


const UpArrow = () => {

    return (<div className=""><svg className="h-6 w-6" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" ><path d="M24 12c0 6.623-5.377 12-12 12s-12-5.377-12-12 5.377-12 12-12 12 5.377 12 12zm-1 0c0 6.071-4.929 11-11 11s-11-4.929-11-11 4.929-11 11-11 11 4.929 11 11zm-11.5-4.828l-3.763 4.608-.737-.679 5-6.101 5 6.112-.753.666-3.747-4.604v11.826h-1v-11.828z"/></svg></div>)
}

export default function ProjectSection() {

    const [selected, setSelected] = useState('dataArchitect')

    return (
        <div className="flex flex-col justify-center items-center w-full">

        {/* Heading */}
        <div className="flex items-center w-full space-x-4">
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
            <span className="md:text-4xl text-3xl font-semibold tracking-tight inline">Projects</span>
            <div className=" flex-1 h-1 bg-websitedark-orange"></div>
        </div>
       Project Section
        
    </div>
    )
  }
  