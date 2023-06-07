import React from 'react';
import Image from 'next/image';

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


export default function Diffs({callouts, title,pdetails, ispdetails=false, classname,imageClassname,textClassname, isclass=false}:{callouts:any, title:string,ispdetails?:boolean,pdetails?:string,classname?:string,imageClassname?:string,textClassname?:string, isclass?:boolean}) {
  return (
    <div className="bg-gray-100 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className={isclass ? classname : "flex text-3xl  justify-center items-center font-bold tracking-tight text-gray-900 sm:text-4xl "}>
                {title}
        </p>
        {}
        <div className="mx-auto max-w-2xl py-20 sm:py-20  lg:max-w-none lg:py-16">
          <div className="mt-3 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts?.map((callout:any) => (
              <div key={callout.name} className="group relative">
                <div className={`relative overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64
                 ${isclass ? imageClassname : '  h-80 w-full'}
                `}>
                  <Image src={callout.imageSrc} alt={callout.imageAlt}  className={"h-full w-full object-cover object-center"} />
                  {/* <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className={"h-full w-full object-cover object-center"}
                  /> */}
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className={`${isclass ? textClassname : "text-base font-semibold text-gray-900"}`}>{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
