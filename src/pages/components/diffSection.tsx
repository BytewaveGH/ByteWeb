import React from 'react';
import Image from 'next/image';
import tryx from '../../../public/ai.png'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


export default function Diffs({ callouts, titlex, pdetails, ispdetails = false, classname, imageClassname, textClassname, descriptionClassname, isclass = false }: { callouts: any, titlex: string, ispdetails?: boolean, pdetails?: string, classname?: string, imageClassname?: string, textClassname?: string, descriptionClassname?: string, isclass?: boolean }) {
  return (
    <div className="bg-gray-100 text-blue-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <p className={isclass ? classname : "flex text-3xl  justify-center items-center font-bold tracking-tight text-gray-900 sm:text-4xl "}>
                {title}
        </p> */}
        <div id='stroke-text' className={textClassname ? textClassname : "flex text-3xl  justify-center items-center font-bold tracking-tight text-gray-900 sm:text-4xl "}>
        </div>
        { }
        <div className="mx-auto max-w-2xl py-20 sm:py-20  lg:max-w-none lg:py-16">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts?.map((callout: any) => (
              <div key={callout.id} className='bg-transparent group py-5 perspective  '>
                <div className="relative h-full group-hover:my-rotate-y-180 duration-1000 preserve-3d  ">
                  <div className={`relative  overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64
                      ${isclass ? imageClassname : '  h-80 w-full'}
                      `} >
                    <div className='h-[101%] group-hover:hidden duration-1000 perspective preserve-3d backface-hidden  '>
                      <Image src={callout.imageSrc} alt={callout.imageAlt} className={"h-full  w-full  object-cover object-center"} />

                    </div>
                    <div className='relative  w-full h-full bg-white text-black'>
                      <div className='relative my-rotate-y-180  grid grid-cols-3 '>
                        <h1>{callout.name}</h1>
                        <h1>{callout.name}</h1>
                        <h1>{callout.name}</h1>
                        <h1>{callout.name}</h1>
                        <h1>{callout.name}</h1>
                        <h1>{callout.name}</h1>
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-6 group-hover:my-rotate-y-180 text-lg text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0 " />
                      {callout.name}
                    </a>
                  </h3>
                  <p className={`${isclass ? descriptionClassname : " text-base font-semibold text-gray-900"}`}>{callout.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
