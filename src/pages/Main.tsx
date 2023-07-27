"use client"

import { Layout, Menu, theme } from 'antd'
import React from 'react'
import NavFooter from './components/footer';
import Nav from './components/navbar';
import Admin from './components/dashboard';
import { useSearchParams } from 'next/navigation'


const { Content, Footer } = Layout;

const MainLayout = ({ child }: { child: React.ReactNode }) => {
  const currentUrl = window.location.href

  console.log(currentUrl)
  return (
    <div>
      {
        currentUrl.includes("http://localhost:3000/admin") ?
          <Layout className='w-full h-screen '>
            <Admin child={child} />
          </Layout>
          :

          <Layout className='w-full'>
            <Nav />
            <Content className="site-layout" >

              {child}


            </Content>
            <Footer style={{ textAlign: 'center' }}>
              <NavFooter />
            </Footer>
          </Layout>
      }
    </div >
  )
}

export default MainLayout