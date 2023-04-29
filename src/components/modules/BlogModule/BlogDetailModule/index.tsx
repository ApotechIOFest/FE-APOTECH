import React, { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'
import { Blog } from '../interface'
import { Breadcrumb, Button } from 'flowbite-react'

export const BlogDetailModule: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()
  const { id } = router.query

  function fetchBlog(blogId: string): Promise<Blog> {
    return axios
      .get(`/blog/${blogId}/`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err)
      })
  }

  if (router.isReady && !blog && isLoading) {
    fetchBlog(id as string)
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
      <main className="relative w-full min-h-screen 2xl:px-[20vw] lg:py-30 md:py-28 py-24 lg:px-48 md:px-16 px-3 bg-slate-50">
        <Breadcrumb className="lg:mb-12 mb-8">
          <Breadcrumb.Item href="/blog">Katalog Blog</Breadcrumb.Item>
          <Breadcrumb.Item>{blog?.title || '...'}</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-blue-darkest text-display-medium">
          {blog?.title || ''}
        </h1>
        <p className="text-gray-700 text-title-small mb-8">
          <span className=" font-productSansBold transition duration-500 ease-in-out">
            {blog?.author_name}
          </span>{' '}
          /{' '}
          {new Date(blog?.publication_date || '').toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}{' '}
          {new Date(blog?.publication_date || '').toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </p>

        <Image
          width={500}
          height={500}
          className="rounded-lg w-full lg:h-[400px] md:h-[400px] h-[200px] object-cover lg:mb-14 md:mb-10 mb-5"
          src={blog?.image ?? ''}
          alt="Image"
        />

        <p
        className='lg:mx-10'
          dangerouslySetInnerHTML={{
            __html: blog?.content.replace(/\n/g, '<br />') || '',
          }}
        ></p>
      </main>
    </>
  )
}
