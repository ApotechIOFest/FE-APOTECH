import Image from 'next/image'

export default function RecentBlog() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h1 className="lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
          Our Recent Articles
        </h1>
        <a
          href="#"
          className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
        >
          Check our latest
        </a>
      </div>
      <div className="max-w-screen-xl mx-auto my-5 sm:my-10 p-5 sm:p-0">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
          <article className="p-6 border border-gray-100 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
            <a
              href="#1"
              className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
            ></a>
            <div className="relative mb-4 rounded-2xl">
              <Image
                width={10}
                height={10}
                className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                src="https://images.unsplash.com/photo-1621967314091-f7151d92bf49?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhtZW52UWhVbXhNfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <a
                className="flex justify-center items-center bg-purple-500 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read article{' '}
                <svg
                  className="ml-2 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
              <div className="flex items-center">
                <div className="pr-3">
                  <Image
                    height={12}
                    width={12}
                    className="h-12 w-12 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60"
                    alt=""
                  />
                </div>
                <div className="flex flex-1">
                  <div className="">
                    <p className="text-sm font-semibold">Booby Purly</p>
                    <p className="text-sm text-gray-500">
                      Published on "date"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="font-medium text-xl leading-8">
              <a
                href="#2"
                className="block relative group-hover:text-purple-500 transition-colors duration-200"
              >
                Lorem ipsum dolor sit amet, Sed ad minus quam voluptate?
              </a>
            </h3>
          </article>
        </div>
      </div>
    </>
  )
}
