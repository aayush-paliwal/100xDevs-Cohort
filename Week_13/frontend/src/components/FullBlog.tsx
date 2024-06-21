import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
        <Appbar /> 
        <div className="flex justify-center">
            <div className="grid grid-cols-12 gap-6 px-10 w-full max-w-screen-2xl pt-16">
                <div className="px-3 col-span-8">
                    <div className="text-6xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on: 2nd Dec 2023
                    </div>
                    <div className="pt-6">
                        {blog.content}
                    </div>
                </div>
                <div className="pl-4 col-span-4">
                    <div className="text-slate-500 text-lg">
                        Author
                    </div>
                    <div className="flex mt-2">
                        <div className="pr-4 flex items-center">
                            <Avatar size="big" name={blog.author.name || "Unknown"} />
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Unknown author"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

