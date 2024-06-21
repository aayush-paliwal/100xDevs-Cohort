import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if(loading){
    return (
      <div>
        <Appbar />
        <div className="flex flex-col items-center">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          {blogs.map((blog) => (
            <BlogCard 
              id={blog.id}
              authorName={blog.author.name || "Unknown"}
              title={blog.title}
              content={blog.content}
              publishedDate="2nd Feb 2024"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

