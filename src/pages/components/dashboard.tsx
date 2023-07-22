
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


import { Layout, Menu, Button, theme } from 'antd';
import AdminNavbar from './adminNav';
import { Input } from '@material-tailwind/react';

const { Header, Sider, Content } = Layout;


const sideItems1 = [
    {
        key: '1',
        icon: <UserOutlined />,
        label: 'Dashboard',
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
    },
    {
        key: '4',
        icon: <UserOutlined />,
        label: 'Dashboard',
    },
    {
        key: '5',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
    },
    {
        key: '6',
        icon: <UploadOutlined />,
        label: 'nav 3',
    },
    {
        key: '7',
        icon: <UserOutlined />,
        label: 'Log out',
    },
]



export default function Admin({ child }: { child: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>

                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={sideItems1}
                />
                {/* <Menu
                    theme="dark"
                    mode="inline"
                    // defaultSelectedKeys={['1']}
                    items={sideItems2}
                /> */}

                {/* <div className='h-16  absolute   inset-x-0 bottom-0  '>
                    <Menu
                        theme="dark"
                        mode="inline"
                        // defaultSelectedKeys={['1']}
                        items={sideItems3}
                    />

                </div> */}
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div className='w-full flex'>
                        <div>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </div>

                        <div className='w-full '>
                            <AdminNavbar />
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {child}
                </Content>
            </Layout>
        </Layout>
    );
};