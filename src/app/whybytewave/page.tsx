import PageSecExtended from '@/pages/components/pageSecExtend'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/outline'
import React from 'react'
import org from '../../../public/15329397_1904.i402.011_Web development isometric concept infographics.jpg'
import bloc from '../../../public/blog-blogging-digital-networking-www-global-concept.jpg'
import tec from '../../../public/22635334_6664805.jpg'

type Props = {}

export default function WhyBytewave({}: Props) {

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

const PEI = [org,bloc,tec]

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
              Driven by experienced teams and an agile framework, we prioritize our 
              clients' commercial goals to deliver exceptional business value.  
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
        <PageSecExtended leftSide={features} rightSide={[]} imageRight={true} images={PEI[0]} useFAQ />
      </div>
       <div>
        <PageSecExtended leftSide={features} rightSide={[]} imageRight={false} images={PEI[2]} useFAQ />
      </div>
      <div>
        <PageSecExtended leftSide={features} rightSide={[]} imageRight={true} images={PEI[1]} useFAQ />
      </div>
    
    </div>
  )
}