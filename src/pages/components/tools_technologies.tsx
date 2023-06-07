import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody
} from "@material-tailwind/react";
import Image from "next/image";
import js from '../../../public/js.png'
import java from '../../../public/java.png'
import react from '../../../public/react.png'
import native from '../../../public/native.png'
import php from '../../../public/php.png'
import nodejs from '../../../public/nodejs.png'
import swift from '../../../public/swift.png'
import c from '../../../public/c-sharp.png'
import typescript from '../../../public/typescript.png'
import go from '../../../public/go.png'
import mysql from '../../../public/mysql.png'
import sql from '../../../public/sql-server.png'
import dotnet from '../../../public/dotnet.png'
import flutter from '../../../public/flutter.png'
import dart from '../../../public/dart.png'
import ai from '../../../public/ai.png'
import xd from '../../../public/xd.png'
import figma from '../../../public/figma.png'
import ps from '../../../public/ps.png'
import laravel from '../../../public/laravel.png'
import kotlin from '../../../public/kotlin.png'
import andriod from '../../../public/andriod.png'
import django from '../../../public/django.png'
import angular from '../../../public/angular.png'
import postgress from '../../../public/postgress.png'
import mongo from '../../../public/mongo.png'
import firebase from '../../../public/firebase.png'
import vb from '../../../public/vb.png'
import sqlite from '../../../public/sqlite.png'
import next from '../../../public/next.png'



 
export default function Tool_Tech() {
  const data = [
    {
      label: "Frameworks and Libraries",
      value: "html",
      desc: [
        {id: 0, img: nodejs, name:'Node'}, 
        {id: 1, img: ai, name:"Adobe illustrator",},
        {id: 2, img: typescript, name:"TypeScript",},
        {id: 3, img: react, name:"React",},
        {id: 4, img: flutter, name:"Flutter",},
        {id: 5, img: native, name:"React Native",},
        {id: 6, img: kotlin, name:"Kotlin",},
        {id: 7, img: dotnet, name:"",},
        {id: 8, img: figma, name:"",},
        {id: 9, img: ps, name:"PhotoShop",},
        {id: 10, img: laravel, name:"",},
        {id: 11, img: django, name:"",},
        {id: 12, img: angular, name:"",},
        {id: 13, img: andriod, name:"Andriod Studio",},
        {id: 14, img: next, name:"Next Js",},
      ]


        //  typescript, react, flutter, native,kotlin, dotnet, figma, ps, laravel, xd, django,angular,andriod,next],
      
    },
    {
      label: "Programming Languages",
      value: "react",
      // desc: [java, js, react, php, c,dart,go,vb],
      desc: [
        {id: 0, img: java, name:'Java'}, 
        {id: 1, img: js, name:"Javascript",},
        {id: 2, img: php, name:"",},
        {id: 3, img: c, name:"",},
        {id: 4, img: dart, name:"",},
        {id: 5, img: go, name:"",},
        {id: 6, img: vb, name:"",},
       
      ]
      
    },
 
    {
      label: "Databases and Servers",
      value: "vue",
      // desc: [mysql, sql, mongo,postgress,firebase,sqlite],
      desc: [
        {id: 0, img: mysql, name:''}, 
        {id: 1, img: sql, name:"",},
        {id: 2, img: mongo, name:"",},
        {id: 3, img: postgress, name:"",},
        {id: 4, img: firebase, name:"",},
        {id: 5, img: sqlite, name:"",},
        
      ]
      
    },
 
   
 
];
 
return (
 
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ">
        <div className="py-10">
            <p className= "flex text-3xl justify-start items-center font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tools and Technologies
        </p>
        </div>
        <Tabs id="custom-animation" value="html" >
            <TabsHeader className="w-full z-0 ">
                {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                    {label}
                </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
                }}
                className="w-full border-4 "
            >
                {data.map(({ value, desc,  }) => (
                <TabPanel key={value} value={value} className="flex w-full flex-wrap px-2 justify-center ">
                    {desc.map((skills)=>{
                        return (
                            <Card className="mt-6 w-64 h-28 flex mx-5 justify-center items-center ">
                                <CardBody className="flex ">
                                    <Image src={skills.img} alt='tools'  quality={100} className="flex justify-center items-center" />
                                    {/* will use this to learn typo */}
                                    <p className="flex justify-center items-center px-2">{skills.name}</p>
                                </CardBody>
                            </Card>
                        )
                    })}
                    
                </TabPanel>
                ))}
            </TabsBody>
            </Tabs>
    </div>
  ); 
}
 