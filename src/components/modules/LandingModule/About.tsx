import Image from 'next/image'

export default function About() {
  return (
    <>
      <h1 className="lg:text-display-medium mb-10 md:text-display-small text-display-small font-bold leading-none text-blue-darkest">
        About Apotech
      </h1>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center mb-10">
        <Image
          height={54}
          width={54}
          className="w-[1800px] h-72"
          src="/assets/images/about-image.png"
          alt=""
        />
        <a
          href="#2"
          className="block relative text-center lg:text-left group-hover:text-purple-500 transition-colors duration-200"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </a>
      </div>
    </>
  )
}
