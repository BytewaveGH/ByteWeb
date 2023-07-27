"use client"

import React, { useRef } from 'react'
import { Col, Row, Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { coreValuesColumns } from '@/pages/data/datagrid_cols';
import { DataGrid } from 'devextreme-react';
import { Column } from 'devextreme-react/data-grid';
import Datagrid_template from '@/pages/components/templates/Datagrid';
import adminTimeline from '@/pages/components/adminTimeline';
import AdminTimeline from '@/pages/components/adminTimeline';
import notes from '../../../public/notes.png'
import file from '../../../public/file.png'
import mail from '../../../public/mail.png'
import Image from 'next/image';
import { operatorsTypes } from '@/pages/interfaces/general';

export default function Dashboard() {

    const gridRef = useRef<any>()


    const cards = [
        { id: 0, label: '' },
        { id: 1, label: '' },
        { id: 2, label: '' },
        // { id: 3, label: '' },
    ]

    const operators: operatorsTypes[] = [
        { id: 0, label: 'Edit Deadline', img: notes },
        { id: 1, label: 'Send Email', img: mail },
        { id: 2, label: 'View Records', img: file },
        { id: 3, label: '', img: notes },
    ]
    return (
        <div className='w-full'>
            {/* upper layout */}
            <div className='w-full h-full flex justify-between '>
                {/* left side */}
                <div className=' w-[70%] h-full'>

                    <div className='w-full h-full'>
                        <Row gutter={16}>
                            {cards.map(({ id, label }) => {
                                return (
                                    <Col key={id} span={8}>
                                        <Card
                                            title="Card title"
                                            // style={{ borderWidth: 3 }}
                                            className=' shadow-md'
                                            bordered={true}
                                            actions={[
                                                // <SettingOutlined key="setting" />,
                                                <div className='flex w-full justify-end items-center space-x-1 px-5'><p className='text-black ' >View</p><EditOutlined key="edit" /></div>,
                                                // <EllipsisOutlined key="ellipsis" />,
                                            ]}
                                        >
                                            Card content
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>

                    </div>

                    {/* bottom grid */}

                    <div ref={gridRef} className='w-full h-full mt-3'>
                        <Datagrid_template columns={coreValuesColumns} />
                    </div>

                </div>


                {/* right side */}
                <div className='px-2 w-[30%] h-full '>
                    {/* top */}
                    <div className='w-full h-full shadow-lg rounded'>
                        <p className='pb-5 px-5 text-xl text-black'>Project Deadlines</p>
                        <div className='w-full h-full'>
                            <AdminTimeline />
                        </div>
                    </div>
                    {/* bottom */}
                    <div className=' w-full full mt-3 shadow-lg rounded'>
                        <div className='w-full h-full grid grid-cols-2  '>
                            {operators.map(({ id, label, img }) => {
                                return (
                                    <div key={id} className='w-full p-8 flex-col justify-center items-center'>
                                        <Image src={img} alt='notes' className='flex justify-center items-center ' />
                                        <p className='w-full flex  py-2'>{label}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
