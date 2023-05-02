import { MedicalStaff, MedicineForum, MedicineHand } from '@icons'
import React from 'react'

export default function Service() {
  return (
    <div className="relative flex flex-col lg:flex-row min-h-[40vw] gap-10 lg:mb-0 md:mb-26 mb-32">
      {' '}
      <div className="w-full lg:w-1/2">
        <h1 className="text-center lg:text-left relative lg:text-display-medium md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
          Why Choose Our Clinic?
        </h1>
        <p className="my-5 text-center lg:text-left">
          {' '}
          Choosing a healthcare provider is an important decision that can have
          a significant impact on your health and well-being. At Apotech Clinic,
          we strive to provide the highest quality of care to our patients, and
          here are some reasons why we believe you should choose our clinic:
        </p>
        <div className="flex flex-col justify-center items-center">
          <div className="flex my-5 gap-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">80+</h1>
              <p>Doctors</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">1200+</h1>
              <p>Medicine</p>
            </div>
          </div>
          <div className="flex my-5 gap-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">60+</h1>
              <p>Blogs</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-extrabold text-2xl">1.7k+</h1>
              <p>Active Users</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col w-full lg:gap-10 lg:m-20">
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-3 p-5">
                <MedicalStaff size={"w-[70px]"} />
                  <p className="text-lg text-black font-semibold">
                    Experienced and Knowledgeable Healthcare Professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="py-10 my-4 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-3 p-5">
                <MedicineHand size={"w-[70px]"}/>
                  <p className="text-lg text-black font-semibold">
                    High-Quality Medicines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-10 md:my-4 my-0 lg:my-40 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          <div className="text-center space-y- sm:text-left">
            <div className="space-y-3 p-5">
            <MedicineForum size={"w-[70px]"}/>
              <p className="text-lg text-black font-semibold">
                Accessible Healthcare Discussion with Forum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
