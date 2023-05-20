"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import Nav from '@/pages/components/navbar';
import NavFooter from '@/pages/components/footer';


const inter = Inter({ subsets: ['latin'] })
const { Header, Content, Footer } = Layout;

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout className='w-full bg-red-600'>
          <Nav />
          <Content className="site-layout" style={{ padding: '0 50px' }}>
          
              {children}

              
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <NavFooter />
          </Footer>
        </Layout>
        
      </body>
    </html>
  )
}
