"use client"

import { useTypewriter } from 'react-simple-typewriter'

import { motion } from "framer-motion";

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08,
        }
    }
}
const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:5,
        }
    }
}
const AnimatedText = ({text, className=""}:{text:string, className:string}) => {
    // React simple typewriter 
const [typetext, count] = useTypewriter({
    words : ["Development Services", "Consultant Services", "Freelancer Services", ],
    loop : true,
    delaySpeed : 2000,
    typeSpeed : 60,
    // deleteSpeed : 100,
    
  })
    return ( 
    <div className="w-full px-10  py-2 flex items-center  text-center overflow-hidden">
       <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-7xl  ${className}`}
       variants={quote}
       initial="initial"
       animate="animate"
       >
     {
        text.split(" ").map((word, index)=>   
        <motion.span
        variants={singleWord}
        
        key={word+''+index} className="inline-block">
            {word}&nbsp;
        </motion.span>
        )
     }
    <br/>
     <div className=' text-red-500'>{typetext}</div>
       </motion.h1>
       
    </div> );
}
 
export default AnimatedText;