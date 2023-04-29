import { Accordion } from 'flowbite-react'
import { faqs } from './FaqConstant'

export const FaqModule: React.FC = () => {
  return (
    <>
      <div className="relative w-full min-h-[80vh] lg:min-h-[76vh] lg:pt-32 md:pt-28 pt-24 lg:px-32 md:px-16 px-3">
        <h1 className="flex w-full justify-center lg:text-display-medium md:text-display-small text-display-small pb-3 text-blue-darkest leading-none">
          Frequently Asked Questions
        </h1>
        <Accordion alwaysOpen={true}>
          {faqs.map((item, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title className="text-black">
                <p>{item.question}</p>
              </Accordion.Title>
              <Accordion.Content className="bg-blue-light">
                <p>{item.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </>
  )
}
