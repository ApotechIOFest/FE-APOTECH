import React from 'react'

export default function Service() {
  return (
    <div className="flex flex-col lg:flex-row">
      {' '}
      <div className="w-full lg:w-1/2">
        <h1 className="text-center lg:text-left relative lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
          Why Choose Our Clinic?
        </h1>
        <p className="my-5 text-center lg:text-left">
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex my-5">
            <div className="flex flex-col justify-center items-center mx-5">
              <h1 className="font-extrabold text-2xl">25</h1>
              <p>Best Doctor</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">25</h1>
              <p>Best Doctor</p>
            </div>
          </div>
          <div className="flex my-5">
            <div className="flex flex-col justify-center items-center mx-5">
              <h1 className="font-extrabold text-2xl">25</h1>
              <p>Best Doctor</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">25</h1>
              <p>Best Doctor</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-full lg:gap-10 lg:m-20">
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 p-5">
                  <p className="text-lg text-black font-semibold">
                    Get Free Consultation
                  </p>
                  <p className="text-slate-500 font-medium">Product Engineer</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5 p-5">
                  <p className="text-lg text-black font-semibold">
                    Get Free Consultation
                  </p>
                  <p className="text-slate-500 font-medium">Product Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 my-4 lg:my-40 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5 p-5">
              <p className="text-lg text-black font-semibold">
                Get Free Consultation
              </p>
              <p className="text-slate-500 font-medium">Product Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
