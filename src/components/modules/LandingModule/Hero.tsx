import Image from 'next/image'
import { useEffect, useState } from 'react'

const LETTER_INTERVAL_IN_MILLISECONDS = 65
const KEYWORD_INTERVAL_IN_MILLISECONDS = 1500
const KEYWORDS_LIST: string[] = [
  'pharmacy',
  'website',
  'medicine store',
  'apothecary',
  'service',
]

export default function Hero() {
  const [keywordIndex, setKeywordIndex] = useState<number>(-1)
  const [currentKeyword, setCurrentKeyword] = useState<string>('pharmacy')

  // functional, recursive logic for keyword animation

  function switchKeyword() {
    setKeywordIndex((prev) => (prev + 1) % KEYWORDS_LIST.length)
  }

  function writeKeyword(keyword: string) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.concat(keyword.slice(0, 1)))
      if (keyword.slice(1)) {
        writeKeyword(keyword.slice(1))
      } else {
        switchKeyword()
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  function sliceKeyword(len: number) {
    setTimeout(() => {
      setCurrentKeyword((prev) => prev.slice(0, prev.length - 1))
      if (len > 1) {
        sliceKeyword(len - 1)
      }
    }, LETTER_INTERVAL_IN_MILLISECONDS)
  }

  useEffect(() => {
    if (keywordIndex === -1) {
      setKeywordIndex(0)
      return
    }

    const len = currentKeyword.length
    if (len >= 1) {
      setTimeout(() => {
        sliceKeyword(len)
      }, KEYWORD_INTERVAL_IN_MILLISECONDS)
    } else {
      writeKeyword(KEYWORDS_LIST[keywordIndex])
    }
  }, [keywordIndex])

  useEffect(() => {
    if (!(currentKeyword.length >= 1)) {
      switchKeyword()
    }
  }, [currentKeyword])

  return (
    <>
      <div className="relative flex flex-col md:flex-row justify-center items-center mb-10 min-h-[38vw] w-full">
        {/* left */}
        <div
          className="flex flex-row relative mb-10 font-bold leading-none
        text-center md:text-left lg:text-display-medium text-display-small
        md:w-[50%] md:max-w-[55%] w-[100%] h-[80vw] md:h-fit mx-auto md:mx-0 md:mr-auto md:px-0 px-[10vw] sm:px-[8vw]"
        >
          <h1 className="text-black mr-3 2xl:pl-[15vw] md:my-0 my-auto">
            Apotech is more than just a{' '}
            <p className="inline text-blue-darkest font-productSansBold font-black underlinable w-fit">
              {currentKeyword}
            </p>
            <p className="inline">.</p>
          </h1>
        </div>

        {/* <div className="bg-red-300 ml-auto relative"> */}
        <Image
          height={320}
          width={320}
          className="
            absolute right-0 top-0 lg:-mr-32 md:-mr-16 -mr-3 lg:-mt-20 md:-mt-16 -mt-12
            ml-auto md:w-[40vw] md:h-[40vw] w-0 h-0
            "
          src="/assets/images/hero-image.png"
          alt=""
        />
        {/* </div> */}
      </div>
    </>
  )
}
