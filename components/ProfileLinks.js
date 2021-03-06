import { motion } from 'framer-motion'
export default function ProfileLinks({name, count}) {


    return (
        <>
        <div className="flex justify-center">
        <div className="inline-flex space-y-2 items-center justify-center space-x-1 text-gray-400 dark:text-gray-600">
            {/* <div className="transform rotat"><p className="transform rotate-90">abhik.ghosh5@gmail.com</p></div> */}
            {/* <div className="h-32 w-1 bg-gray-600 dark:bg-gray-200 mb-32"></div> */}
            {/* <div className="transform -rotate-90 mb-24">abhik.ghosh5@gmail.com</div> */}
            {/* <div className="h-20 w-1 bg-gray-600 dark:bg-gray-200 mb-0"></div> */}
            
            <motion.a href="https://github.com/ghoshabhik" rel="nofollow noreferrer" target="_blank"
            whileHover={{y: -1}}
            ><svg className="xl:h-7 xl:w-7 mt-2 h-5 w-5 hover:text-gray-700 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"/></svg></motion.a>
            <motion.a href="https://www.linkedin.com/in/abhik-ghosh/" rel="nofollow noreferrer" target="_blank"
            whileHover={{y: -1}}
            ><svg className="xl:h-7 xl:w-7 h-5 w-5 hover:text-gray-700 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg></motion.a>
            <motion.a href="https://twitter.com/abhik_g" rel="nofollow noreferrer" target="_blank"
            whileHover={{y: -1}}
            ><svg className="xl:h-7 xl:w-7 h-5 w-5 hover:text-gray-700 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z"/></svg></motion.a>
            <motion.a href="mailto: abhik.ghosh5@gmail.com" rel="nofollow noreferrer" target="_blank"
            whileHover={{y: -1}}
            ><svg className="xl:h-7 xl:w-7 h-5 w-5 hover:text-gray-700 dark:hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.021 17.824c-3.907 0-6.021-2.438-6.021-5.586 0-3.363 2.381-6.062 6.638-6.062 3.107 0 5.362 2.019 5.362 4.801 0 4.356-5.165 5.506-4.906 3.021-.354.555-.927 1.177-2.026 1.177-1.257 0-2.04-.92-2.04-2.403 0-2.222 1.461-4.1 3.19-4.1.829 0 1.399.438 1.638 1.11l.232-.816h1.169c-.122.416-1.161 4.264-1.161 4.264-.323 1.333.675 1.356 1.562.648 1.665-1.29 1.75-4.664-.499-6.071-2.411-1.445-7.897-.551-7.897 4.347 0 2.806 1.976 4.691 4.914 4.691 1.719 0 2.771-.465 3.648-.974l.588.849c-.856.482-2.231 1.104-4.391 1.104zm-1.172-7.153c-.357.67-.588 1.538-.588 2.212 0 1.805 1.761 1.816 2.626.12.356-.697.586-1.586.586-2.265 0-1.458-1.748-1.717-2.624-.067z"/></svg></motion.a>
            {/* <div className="h-40 w-1 bg-gray-400 dark:bg-gray-700 hidden xl:block"></div> */}
        </div>
        </div>
        {/* <div className="fixed xl:bottom-2 xl:left-2 bottom-2 right-5 w-max">
        <div className="inline-flex flex-col space-y-2 items-center ">
            
            <div className="h-40 w-1 bg-gray-600 dark:bg-gray-200"></div>
        </div>
        </div> */}
        </>
    )
}
