"use client"

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { featureItems, featureSec } from './variantComp'

const features = [
  {
    name: 'Push to deploy with advanced tech stacks',
    description:
      `We possess a team of highly skilled professionals with extensive expertise in developing custom software solutions. Our 
      experience spans across various industries, allowing us to understand the unique challenges and requirements of different 
      businesses`,
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Guaranteed software quality with time-tested processes',
    description:
      `We adhere to stringent quality assurance practices to ensure the delivery of high-quality software solutions. 
      From rigorous testing procedures to code reviews, we leave no stone unturned in ensuring that our solutions meet 
      the highest industry standards and exceed your expectations.Our team is committed to meeting agreed-upon deadlines 
      while maintaining the highest standards of quality. We follow efficient project management practices, 
      keeping you informed about the progress and ensuring a smooth and timely delivery process.`,
    icon: LockClosedIcon,
  },
  {
    name: 'UI/UX design and ideation',
    description:
      `Our commitment to innovation drives us to stay up-to-date with the latest technological advancements. We leverage 
      cutting-edge tools and frameworks to create robust, scalable, and future-proof software solutions that empower your 
      business to thrive in a rapidly evolving digital landscape.`,
    icon: ArrowPathIcon,
  },
  {
    name: 'Transparent communication and reporting',
    description:
      `We believe in the power of collaboration. Our team works closely with you, fostering transparent communication 
      and active involvement at every stage of thesoftware development lifecycle. We value your input, ensuring that 
      your vision is at the core of the solution we build`,
    icon: FingerPrintIcon,
  },
]

export default function WhyByte() {
  return (
    <div className=" w-full justify-center py-16 sm:py-12">
      <div className=" w-full justify-center items-center lg:px-8">
        <div className="relative max-w-5xl mx-auto pt-10 sm:pt-10 lg:pt-10 justify-center items-center text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 italic">Bytewave</h2>
          <h1 className="text-slate-900 font-bold text-4xl sm:text-5xl lg:text-5xl tracking-tight text-center dark:text-white text-black uppercase" >
              Building a perfect solution according to your business goals
          </h1>
          <p className="mt-4 text-lg text-slate-600 text-center text-gray-600 max-w-3xl mx-auto dark:text-slate-400">
              Driven by experienced teams and an agile framework, we prioritize our 
              clients' commercial goals to deliver exceptional business value.  
          </p>
        </div>
        <div className="mx-auto mt-16 w-full max-w-7xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="relative pl-16"
                initial={{
                  opacity: 0,
                  translateX: index % 2 === 0 ? -50 : 50,
                  translateY: -50,
                }}

                animate={{
                  opacity: 1,
                  translateX: 0,
                  translateY: 0,
                }}

                transition={{ duration: 8, delay: index * 2}}

                >
                <dt  className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
