"use client"

import PageSecExtended from '@/pages/components/pageSecExtend'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline'
import React from 'react'
import org from '../../../public/15329397_1904.i402.011_Web development isometric concept infographics.jpg'
import bloc from '../../../public/blog-blogging-digital-networking-www-global-concept.jpg'
import tec from '../../../public/22635334_6664805.jpg'
import CarouselWC from '@/pages/components/carouselWC'
import Carousel_Component from '@/pages/components/carousel'
import CompaniesWeServe from '@/pages/components/companiesWeserve'
import destination from '../../../public/destination.png'
import dish from '../../../public/dish.png'
import graduation from '../../../public/academic.png'
import ecormence from '../../../public/ecommerce.png'
import house from '../../../public/house.png'
import supply from '../../../public/supply.png'
import health from '../../../public/health.png'
import deployment from '../../../public/deployment.png'
import Testimonials from '@/pages/components/Testimonials'
import Members from '@/pages/components/members'

type Props = {}

export default function WhyBytewave({ }: Props) {


  const Industries = [
    { id: 0, image: deployment, label: 'Top Talents', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.' },
    { id: 1, image: ecormence, label: 'Direct Access to Experts', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.' },
    { id: 2, image: graduation, label: 'Project Specs and Scoping', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.' },
    { id: 3, image: health, label: 'Code Documentation and Reporting', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.' },
    { id: 4, image: dish, label: 'Managed Process', desc: '' },
    { id: 5, image: destination, label: ' Consulting services', desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.' },
  ]

  const testimonials = [
    {
      id: 1,
      imgLink: "https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimony: "I recently had my artwork framed by The Kwame Inc Frames, and I couldn't be happier with the result. The attention to detail and craftsmanship are exceptional. My piece looks stunning, and the frame perfectly complements the artwork.",
      contributor: "Josephine F Kwakye",
      occupation: "Software Developer"
    },

    {
      id: 2,
      imgLink: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=400",
      testimony: "I entrusted them with framing a family portrait, and they exceeded my expectations.The team helped me choose the ideal frame that enhanced the photograph beautifully and the final product is now proudly displayed in our home. Thank you, The Kwame Inc Frames!",
      contributor: "Michael Reynolds",
      occupation: "Entrepreneur"
    },

    {
      id: 3,
      imgLink: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=420&h=400&dpr=1",
      testimony: "The team understood the sentimental value of the artwork I brought in and treated it with utmost care. They provided valuable suggestions for frame selection, and the end result was breathtaking. I am grateful for their expertise and professionalism.",
      contributor: "Abena Mary",
      occupation: "Business Woman"
    }
  ]


  const features = [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]

  const PEI = [org, bloc, tec]

  const cards = [
    { id: 0, label: "UI/UX", icon: "hi", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others." },
    { id: 1, label: "UI/UX", icon: "hi", description: "Because it's about motivating " },
    { id: 2, label: "UI/UX", icon: "hi", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others." },
    { id: 3, label: "UI/UX", icon: "hi", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others." },
    { id: 4, label: "UI/UX", icon: "hi", description: "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others." },
  ]

  const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },

    // More people...
  ]

  return (
    <div className='w-full h-full bg-white py-3 '>
      <div className='w-full justify-center items-center lg:px-8'>
        <div className="relative max-w-5xl mx-auto pt-10 sm:pt-10 lg:pt-10 justify-center items-center text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 italic">Bytewave</h2>
          <h1 className="text-slate-900 font-bold text-4xl sm:text-5xl lg:text-5xl tracking-tight text-center dark:text-white text-black uppercase" >
            Building a perfect solution according to your business goals
          </h1>
          <p className="mt-6 text-lg text-slate-600 text-center text-gray-600 max-w-5xl mx-auto dark:text-slate-400">
            Driven by experienced teams and an agile framework, we prioritize our
            clients' commercial goals to deliver exceptional business value.
            Driven by experienced teams and an agile framework, we prioritize our
            clients' commercial goals to deliver exceptional business value.
            Driven by experienced teams and an agile framework, we prioritize our
            clients' commercial goals to deliver exceptional business value.
            Driven by experienced teams and an agile framework, we prioritize our
            clients' commercial goals to deliver exceptional business value.

          </p>
        </div>
      </div>

      {/* Accordions */}

      <div>
        <PageSecExtended
          leftSide={features}
          rightSide={[]}
          imageRight={true}
          images={PEI[0]}
          useFAQ
          FAQHeadings='Hey there'
        />
      </div>
      <div>
        <PageSecExtended
          leftSide={features}
          rightSide={[]}
          imageRight={false}
          images={PEI[2]}
          useFAQ
          FAQHeadings={'Hello there'}
        />
      </div>
      <div>
        <PageSecExtended
          leftSide={features}
          rightSide={[]}
          imageRight={true}
          images={PEI[1]}
          useFAQ
          FAQHeadings='Herh chama'
        />
      </div>

      {/* What you will get  */}

      <div className='mx-0'>
        <CompaniesWeServe
          services={Industries}
          desc={true}
          style='mx-auto max-w-[112rem] px-2 py-10 sm:px-6 lg:px-8 lg:py-14  justify-center'
          customTitle={`py-10  relative after:absolute flex justify-center sm:m-3   items-center  after:inset-0 after:z-0 after:content-['Experience_our_exceptional_offerings'] after:text-black after:-top-0 after:left-0 after:text-5xl  after:h-full after:w-full after:font-sans  before:absolute  before:text-5xl  before:content-['Services_we_offer'] text-blue-gray-100  before:-top-4 before:left-8 before:h-full before:w-full before:z-0  before:tracking-widest before:italic  before:font-sans before:uppercase`}
          cardDesign={'mt-6 w-full sm:w-64 sm:h-80 h-80 md:w-[25rem] md:h-[22rem] relative flex mx-5  items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 '}
        />

      </div>



      {/* Our Products sample */}


      {/* Testimonials  */}
      <div>
        <Testimonials testimonials={testimonials} />
      </div>

      <div>
        <Members people={people} />
      </div>

    </div>
  )
}