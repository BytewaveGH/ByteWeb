import { Card, CardBody } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react'
import destination from '../../../public/destination.png'
import dish from '../../../public/dish.png'
import graduation from '../../../public/academic.png'
import ecormence from '../../../public/ecommerce.png'
import house from '../../../public/house.png'
import supply from '../../../public/supply.png'
import health from '../../../public/health.png'
import deployment from '../../../public/deployment.png'



const Industries = [
    {id: 0, image: deployment, label:'On-Demand Solutions'},
    {id: 1, image: ecormence, label:'Retail, Ecommerce'},
    {id: 2, image: graduation, label:'Education & e-learning'},
    {id: 3, image: health, label:'HealthCare & Fitness'},
    {id: 4, image: dish, label:'Food & Restaurants'},
    {id: 5, image: destination, label:'Travel & Hospitality'},
    {id: 6, image: house, label:'Real Estate'},
    {id: 7, image: supply, label:'Logistics & Distribution'},
]


export default function CompaniesWeServe (){

    return (

        <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
            <div className="py-10">
                <p className= "flex text-3xl justify-start items-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                Industries We Serve
                </p>
            </div>

            <div className='w-5/6 mx-auto flex flex-wrap px-2 justify-center items-center'>
                {Industries.map((ind:any, index:number)=>{
                        return (
                            <Card key={index} className="mt-6 w-full sm:w-48 sm:h-48 h-60 relative flex mx-5  items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
                                <span className="animate-ping absolute inline-flex w-2 h-2 rounded-full  bg-blue-500 opacity-75 "></span>
                                <span className="relative inline-flex w-2 h-2 rounded-full   bg-blue-500"></span>
                                <CardBody className="w-full justify-center items-center ">
                                    <Image src={ind.image} alt="Industial-imgaes" className='mx-auto flex justify-center items-center py-1 '  />
                                    <p className='mx-auto flex h-16 justify-center items-center '>{ind.label}</p>
                                </CardBody>
                            </Card>
                        )
                    })}
            </div>

        </div>
    );
}