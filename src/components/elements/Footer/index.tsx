import { ApotechLogo } from '@icons'
import { Footer } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const FooTer: React.FC = () => {
  return (
    <>
      <Footer container={true} className="px-20   drop-shadow-2xl rounded-2xl">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="flex flex-col justify-center">
              <div className="flex">
                <ApotechLogo size={'w-10'} />
                <h1 className="self-center whitespace-nowrap ml-3 text-blue-darkest lg:text-headline-medium md:text-headline-medium text-title-large">
                  apotech
                </h1>
              </div>
              <p className="text-neutral-800 text-sm font-productSans text-center mt-1">
                © 2023 Apotech
              </p>
              <Link
                href="https://github.com/ApotechIOFest/"
                className="mt-6 mx-auto"
              >
                <Image
                  src="/assets/images/icons/github-lightblue.svg"
                  width={24}
                  height={24}
                  alt="github"
                />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-16 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="links" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Medicine</Footer.Link>
                  <Footer.Link href="#">Forum</Footer.Link>
                  <Footer.Link href="#">Login</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="links" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Landing</Footer.Link>
                  <Footer.Link href="#">About Us</Footer.Link>
                  <Footer.Link href="#">Articles</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}
