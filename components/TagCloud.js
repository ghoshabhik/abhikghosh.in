

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
                <p className=" px-2 py-1 m-1 rounded-md border dark:border-gray-700 text-center text-md cursor-pointer" key={index} onClick={(e) => selectedTag(e)}
                >
                    {tag[0]}
                </p>
            ))}
        </div>
    </div>
  )
}