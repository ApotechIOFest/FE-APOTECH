import Image from 'next/image'

export default function About() {
  return (
    <>
      <div
        className="relative flex flex-col md:flex-row gap-10 justify-center items-center mb-10 min-h-[45vw]"
        id="about"
      >
        <Image
          height={320}
          width={320}
          className="relative lg:-mx-32 md:-mx-16 -mx-3 2xl:w-[30vw] 2xl:h-[30vw] xl:w-[35vw] xl:h-[35vw] md:w-[40vw] md:h-[40vw] w-0 h-0 rounded-r-3xl"
          src="/assets/images/about-image.png"
          alt=""
        />
        <div className="lg:pl-32 md:pl-16 pl-3">
          <h1 className="text-center md:text-left relative lg:text-display-medium mb-10 md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
            About Apotech
          </h1>
          <a
            href="#2"
            className="block relative text-center md:text-left group-hover:text-purple-500 transition-colors duration-200 2xl:pr-[30vw] lg:pr-32 md:pr-8 pr-3"
          >
            At Apotech, we are a dedicated team of healthcare professionals and
            technology experts who are passionate about improving the health and
            well-being of people in need. Our mission is to provide accessible
            and affordable healthcare services to all, regardless of their
            location, socioeconomic status, or health condition. We believe that
            healthcare should be a right, not a privilege, and we work
            tirelessly to ensure that our healthcare services are accessible and
            affordable to all. We are constantly seeking innovative ways to
            improve our services and provide the best possible care to our
            patients.
          </a>
        </div>
      </div>
    </>
  )
}
