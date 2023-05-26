"use client"

import { Layout,Menu, theme  } from 'antd'
import React from 'react'
import NavFooter from './components/footer';
import Nav from './components/navbar';


const { Header, Content, Footer } = Layout;

const MainLayout = ({child}:{child:React.ReactNode}) => {
  return (
    <div>
        <Layout className='w-full'>
          <Nav />
          <Content className="site-layout" >
          
              {child}

              
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <NavFooter />
          </Footer>
        </Layout>
    </div>
  )
}

export default MainLayout