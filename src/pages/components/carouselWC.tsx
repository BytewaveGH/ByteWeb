"use client"

import React from 'react';
import { Button, Card, Carousel, Typography } from 'antd';
import laptop from '../../../public/laptops.jpg'
import Image from 'next/image';
import { CardBody, CardFooter } from '@material-tailwind/react';
// import Image from 'next/image';

// const contnetStyles: React.CSSProperties = {
    
//   height: '100%',
//   width: '100%',
//   color: '#000',
//   textAlign: 'center',
//   backgroundImage : `url(${laptop})`,
//   backgroundSize: 'cover',

// };

const images = [
  {id:0, label: 'Home', img : laptop},
  {id:0, label: 'Home', img : laptop},
  {id:0, label: 'Home', img : laptop},
  {id:0, label: 'Home', img : laptop},
]

const carouselWC= ({useCards, useImages, cardsArr, imagesArr}:{useCards?: boolean, useImages?:boolean, cardsArr?:any, imagesArr?:any}) => (
  

    <Carousel  autoplay className=' w-full flex '>
    { 
      useImages ? 
        images.map(({id,label,img})=>{
          return (
            
            <div style={{backgroundImage : `url(${img})`,}} className="h-full w-full bg-blue-500 ">
              
              <Image src={img} alt=""  />
            </div>
          
          )
        })
      :
      useCards ?
        cardsArr?.map((card:any)=>{
          return (
            <Carousel  autoplay className=' w-full flex '>
            <div className='w-full h-full bg-blue-500 flex space-x-5 '>
              
              <Card className="mt-6 w-[200px] h-[400px] bg-red-400">
                <CardBody>
                  {/* <RocketLaunchIcon className="text-blue-500 w-12 h-12 mb-4" /> */}
                  <Typography color="blue-gray" className="mb-2">
                    {card.label}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button size="small"className="flex items-center gap-2">
                      Learn More 
                      {/* <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" /> */}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            
            </div>
               </Carousel>
           
          )
        })
       
        :

        <>
        </>
      
    }
     </Carousel>


  
);

export default carouselWC;



