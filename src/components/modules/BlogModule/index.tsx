import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { BlogCard } from './module-elements/BlogCard'
import { Blog } from './interface'

export const BlogModule: React.FC = () => {
  const [blog, setBlog] = useState<Blog[] | null>()
  const router = useRouter()

  function fetchBlogs(): Promise<any> {
    return axios
      .get('/blog/')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  if (router.isReady && !blog) {
    fetchBlogs()
      .then((data) => setBlog(data))
      .catch((err) => setBlog([]))
  }

  return (
    <>
      <div className="relative w-full min-h-[80vh] lg:min-h-[76vh] lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h1 className="lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
            Our Blogs
          </h1>
        </div>
        <div className="max-w-screen-xl mx-auto my-5 sm:my-10 p-5 sm:p-0">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
            {blog?.map((blog: Blog, key: number) => (
              <BlogCard key={key} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
