import React from 'react';
import laptop from '../../../public/laptops.jpg';
import rightarrow from '../../../public/rightarrow.png'
import Image from 'next/image';
import { Button, Form, Input, InputNumber } from 'antd';
import { layout } from './variantComp';


const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function WWU() {
    return (
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-20 mx-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        {/* <Image src={"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"} alt=''  className='absolute bg-blue-gray-800 inset-0 -z-10 h-full w-full object-cover object-right md:object-center' /> */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full flex  lg:mx-0">
            {/* work with us  */}
            <div className='w-2/5' >
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
            </div>
            {/* animated arrow */}
            <div style={{width:'20%'}} className='text-white py-24 h-full items-center justify-center '>
              <div className="animate-bounce flex items-center justify-center ">
                <Image src={rightarrow} alt='right arrow' width={100} height={100} className='items-center justify-center' />
              </div>
            </div>

            {/* Contact form */}

            <div className='text-white w-2/5'>
             <Form
                labelCol={ {span: 8, color:'#fff', } }
                wrapperCol={ {span: 16} }
                name="nest-messages"
                className=''
                // onFinish={onFinish}
                // style={{ color:'red' }}
          
                // validateMessages={validateMessages}
              >
                <Form.Item name={['user', 'name']} label={<p className='text-white'>Name</p>} rules={[{ required: false }]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'email']} label={<p className='text-white'>Email</p>} rules={[{ type: 'email', required: true }]}>
                  <Input />
                </Form.Item>
                
                <Form.Item name={['user', 'contact']} label={<p className='text-white'>Contact</p>} rules={[{type: 'number'}]}>
                  <Input />
                </Form.Item>
                <Form.Item name={['user', 'message']} label={<p className='text-white'>Message</p>}>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8 }}>
                  <div className='flex justify-evenly items-center'>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                    <p className='items-center text-white '>OR</p>
                    <Button type="primary" htmlType="submit">
                    Registration =={'>'}
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="mx-auto  max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className=" grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  