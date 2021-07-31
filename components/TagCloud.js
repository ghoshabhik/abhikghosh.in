import { motion } from 'framer-motion'

export default function TagCloud({ posts, selectedTag }) {

  var tagList = []
  posts.map(post => {
    post.tags.map(tag => {
        tagList.push(tag)
    })
  })
  var flattenTags = new Map();
  tagList.forEach( tag => {
    flattenTags.has(tag) ? flattenTags.set(tag, flattenTags.get("tag2")+1) : flattenTags.set(tag, 1)
  })

  const tagsArr = Array.from(flattenTags.entries())

  return (
    <div className="mb-10 w-full text-base">
        <div className="flex flex-wrap items-center justify-center">
            <p className="px-2 py-1 m-1 rounded-md border dark:border-gray-700 text-center text-md cursor-pointer" onClick={(e) => selectedTag(e)}>
                    Show All
            </p>
            {tagsArr.map((tag, index) => (
                <motion.p className=" px-2 py-1 m-1 rounded-md border dark:border-gray-700 text-center text-md cursor-pointer" key={index} onClick={(e) => selectedTag(e)}
                initial={{ opacity:0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .2, delay: index*.1 }}
                >
                    {tag[0]}
                </motion.p>
            ))}
        </div>
    </div>
  )
}