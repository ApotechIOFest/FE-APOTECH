import React from 'react'
import { BlogCardProps } from './interface'
import Image from 'next/image'

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <>
      <div className="p-4 border border-gray-100 transition duration-100 group transform hover:-translate-y-2 hover:shadow-xl rounded-2xl cursor-pointer">
        <div className="relative mb-4 rounded-2xl">
          <Image
            width={300}
            height={300}
            className="rounded-2xl w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-105"
            src={blog.image}
            alt="Image"
          />
          <a
            className="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
            href={`/blog/${blog.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read blog{' '}
            <svg
              className="ml-2 w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>
        <p className="text-title-large leading-8 block relative group-hover:text-purple-500 transition-colors duration-200 font-productSansBold text-blue-darkest">
          {blog.title}
        </p>
        <p className="text-title-medium mt-2 line-clamp-3">{blog.content}</p>
        <div className="bottom-0">
          <div className="block border-b-[2px] border-blue-normal my-3"></div>
          <div className="flex justify-between items-center w-full pb-4 mb-auto">
            <div className="flex items-center">
              <div className="pr-3">
                <Image
                  height={300}
                  width={300}
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt=""
                />
              </div>
              <div className="flex flex-1">
                <div className="">
                  <p className="text-sm font-semibold">{blog.author_name}</p>
                  <p className="text-sm text-gray-500">
                    Published on{' '}
                    {new Date(blog.publication_date).toLocaleDateString(
                      'en-US',
                      { month: 'long', day: 'numeric', year: 'numeric' }
                    )}{' '}
                    |{' '}
                    {new Date(blog.publication_date).toLocaleTimeString(
                      'en-US',
                      { hour: 'numeric', minute: 'numeric', hour12: true }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
