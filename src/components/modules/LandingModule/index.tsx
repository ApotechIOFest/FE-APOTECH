import React from 'react'
import Hero from './Hero'
import About from './About'
import Faq from './Faq'
import RecentBlog from './RecentBlog'

export const LandingModule: React.FC = () => {
  return (
    <>
      <div className="relative w-full lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <Hero />
        <About />
        <RecentBlog />
        <Faq />
      </div>
    </>
  )
}