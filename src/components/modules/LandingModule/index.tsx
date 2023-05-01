import React from 'react'
import Hero from './Hero'
import About from './About'
import RecentBlog from './RecentBlog'
import Service from './Service'

export const LandingModule: React.FC = () => {
  return (
    <>
      {/* kalau ada yang ngubah padding di baris dibawah ini PLIS kabarin asap -vei */}
      <div className="relative w-full lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <Hero />
        <About />
        <Service />
        <RecentBlog />
      </div>
    </>
  )
}
