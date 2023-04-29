import React, { useState } from 'react'
import { ALink } from '@elements'
import axios from 'axios'
import { useRouter } from 'next/router'
import { BlogCard } from '../BlogModule/module-elements/BlogCard'
import { Blog } from '../BlogModule/interface'

export default function RecentBlog() {
  const [blog, setBlog] = useState<Blog[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  function fetchBlogs(): Promise<any> {
    return axios
      .get('/blog/')
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  if (router.isReady && !blog && isLoading) {
    fetchBlogs()
      .then((data) => {
        setBlog(data)
      })
      .catch((err) => {
        alert(err)
        setBlog(null)
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h1 className="lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
          Our Recent Blogs
        </h1>
        <ALink uppercase={true} href={'/blog'}>
          Read More Blogs
        </ALink>
      </div>
      <div className="max-w-screen-xl mx-auto my-5 sm:my-10 p-5 sm:p-0">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        {blog?.slice(0, 3).map((blog: Blog, key: number) => (
  <BlogCard key={key} blog={blog} />
))}
        </div>
      </div>
    </>
  )
}
