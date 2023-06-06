"use client"

import React from "react";
import AnimatedText from '@/pages/components/AnimatedText'
import Carousel_Component from '@/pages/components/carousel'
import Diffs from '@/pages/components/diffSection'
import WhyByte from '@/pages/components/featureSection'
import LogoCloud from '@/pages/components/logoClouds'
import PageSec from '@/pages/components/pageSection'
import SoftwareWheel from '@/pages/components/softwareWheel'
import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import PageSecExtended from '@/pages/components/pageSecExtend'
import WWU from "@/pages/components/wwu";
import CTABanner from "@/pages/components/banner";
import DevPros from "@/pages/components/devPros";
import tryx from '../../public/try.webp';
import Tool_Tech from "@/pages/components/tools_technologies";
import CompaniesWeServe from "@/pages/components/companiesWeserve";
import mobiledev from '../../public/2209.i201.033.S.m004.c13.mobile app development isometric flowchart.jpg'
import hackathon from '../../public/85z_2202_w012_n001_40a_p23_40.jpg'
import elearning from '../../public/elearning.jpg'
import organization from '../../public/7199788_30496.jpg'
import webdev from '../../public/web-dev.webp'
import org from '../../public/15329397_1904.i402.011_Web development isometric concept infographics.jpg'
import bloc from '../../public/blog-blogging-digital-networking-www-global-concept.jpg'
import tec from '../../public/22635334_6664805.jpg'

export default function Home() {

  const callouts = [
    {
      name: 'Organiztions Needs',
      description: 'Work from home accessories',
      imageSrc: organization,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Learning Code Online',
      description: 'Journals and note-taking',
      imageSrc: elearning,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Open Source Community',
      description: 'Daily commute essentials',
      imageSrc: hackathon,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  const services = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageSrc: mobiledev,
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageSrc: webdev,
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageSrc: mobiledev,
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
    
  ]

  // For Extension

  const PEI = [org,bloc,tec]
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



  return (
    <div className="w-full min-h-screen   ">
      <div className=" w-full  flex items-center justify-between font-mono text-sm bg-white">
       
          <div className='w-1/2 h-full  justify-center items-center bg-white'>
            <div className='w-full justify-center items-center '>
              
                <AnimatedText className={'justify-center items-center '} text={`Custom software `} />
                <p className="mt-4  mx-auto w-4/5 text-lg leading-8 text-gray-600">
                  Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                  pulvinar et feugiat blandit at. In mi viverra elit nunc.
                </p>
            </div>
            {/* <div className='h-full '>
              <SoftwareWheel />
            </div> */}

          </div>
          <div className="w-1/2 h-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black ">
            {/* <Carousel_Component /> */}
            <Image src={tryx} alt={"Picture of team laptops "} className="justify-center items-center"   />
          </div>

      
      </div>

     

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <LogoCloud />
      </div>
      {/* why byte */}
      <div>
        <WhyByte />
      </div>
      {/* bytewave diffs */}
      <div>
        <Diffs callouts={callouts} title={"The ByteWave Difference"} />
      </div>
      {/* cta */}
       <div>
        <PageSec />
      </div>
      {/* cta extended of the 3 differences*/}
      <div>
        <PageSecExtended leftSide={features} rightSide={[]} imageRight={true} images={PEI[0]} />
      </div>
       <div>
        <PageSecExtended leftSide={features} rightSide={[]} imageRight={false} images={PEI[2]} />
      </div>
      <div>
        <PageSecExtended leftSide={features} rightSide={[]} imageRight={true} images={PEI[1]} />
      </div>
      {/* services */}
      {/* will need a scroll horizontal effect */}
      <div>
        <Diffs 
          callouts={services} 
          title={"Our Services"} 
          isclass={true} 
          classname="flex text-3xl justify-start items-start font-bold tracking-tight text-gray-900 sm:text-4xl"
          imageClassname="h-full w-full"
          />
      </div>

      {/* CTA */}
      <div>
        <CTABanner />
      </div>

      {/*   How we deliver our services using agile  */}
      <div>
        <DevPros />
      </div>

      {/* Tool and technologies  */}
      <div>
          <Tool_Tech />
      </div>

      

    {/* Work with US */}
      <div>
        <WWU />
      </div>

      {/* Companies we serve */}
      <div>
        <CompaniesWeServe />
      </div>

      {/* <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </div>
  )
}
