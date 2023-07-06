import { Card, CardBody } from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react'







export default function CompaniesWeServe ({services, customTitle,cardDesign, style, desc=false }:{services:any[], customTitle?:string,cardDesign?:string, style?:string, desc?: boolean}){

    return (

        <div className={style ? style : 'mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'}>
            {/* this is called psuedo effect */}
            {/* now I am left with using stroke on the before text */}
            <div id='stroke-text' className={customTitle ? customTitle : `py-10 px-5 relative after:absolute flex   items-center after:italic after:inset-0 after:z-0 after:content-['Industries_We_Serve'] after:text-black after:-top-0 after:left-0 after:text-5xl  after:h-full after:w-full after:font-sans  before:absolute  before:text-5xl  before:content-['Industries'] text-blue-gray-100  before:-top-4 before:left-8 before:h-full before:w-full before:z-0  before:tracking-widest before:italic  before:font-sans before:uppercase`}>
                {/* <p className= "flex z-10 px-5 bg-red-500 text-4xl italic h-full w-full font-bold tracking-tight  sm:text-4xl">
                        Industries We Serve
                </p> */}
            </div>

            <div className=' mx-auto flex flex-wrap px-2 justify-center items-center '>
                {services.map((ind:any, index:number)=>{
                        return (
                            <Card key={index} className={cardDesign ? cardDesign : "mt-6 w-full sm:w-64 sm:h-60 h-60 relative flex mx-5  items-end transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 "}>
                                <span className="animate-ping absolute inline-flex w-2 h-2 rounded-full  bg-blue-500 opacity-75 "></span>
                                <span className="relative inline-flex w-2 h-2 rounded-full   bg-blue-500"></span>
                                <CardBody className="w-full justify-center items-center ">
                                    <Image src={ind.image} alt="Industial-imgaes" className='mx-auto flex justify-center items-center py-1 '  />
                                    <p className='mx-auto flex text-lg h-12 justify-center items-center '>{ind.label}</p>
                                    {desc ? 
                                    <p className=' flex text-ellipsis text-base h-full   '>{ind.desc}</p>
                                    :
                                    <>
                                    </>
                                    }
                                </CardBody>
                            </Card>
                        )
                    })}
            </div>

        </div>
    );
}