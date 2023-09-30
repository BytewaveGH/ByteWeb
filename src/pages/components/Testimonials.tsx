"use client"

import { Carousel } from "antd";
import Image from 'next/image';
import laptops from '../../../public/laptops.jpg';
import tryx from '../../../public/try.webp';



export default function Testimonials({ testimonials }: { testimonials: any[] }) {
  return (
    <Carousel autoplay >
      {testimonials.map((testimonial, index: number) => (
        <section key={index} className={` relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8`}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>
                  {testimonial.testimony}
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <Image
                  src={testimonial.imgLink}
                  alt={'Testimonial image'}
                  className="mx-auto h-10 w-10 rounded-full"
                  width={400}
                  height={400}
                />
                {/* <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={testimonial.imgLink}
                  alt=""
                /> */}
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">{testimonial.contributor}</div>
                  <svg
                    viewBox="0 0 2 2"
                    width={5}
                    height={5}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">{testimonial.occupation}</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      ))}

    </Carousel>
  );
}

















