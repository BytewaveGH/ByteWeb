'use client'

import Experience from '@/pages/Experience'
import { Steps } from 'antd'
import React, { useState } from 'react'

export default function About(){

  const [current, setCurrent] = useState(1);

const steps = [
  {
    title: <p className='hover:cursor-pointer' onClick={()=>{setCurrent(0)}}>First</p>,
    content: <Experience />,
  },
  {
    title:  <p className='hover:cursor-pointer' onClick={()=>{setCurrent(1)}}>Second</p>,
    content:<Experience />,
  },
  {
    title:  <p className='hover:cursor-pointer' onClick={()=>{setCurrent(2)}}>Last</p>,
    content: <Experience />,
  },
];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div className='mt-[20px] mx-[20px]'>
     <Steps current={current} items={items} />
     <div >{steps[current].content}</div>
    
     </div>
  )
}