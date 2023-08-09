"use client"

import { useRef } from "react"
import { operatorsTypes } from "../interfaces/general"
import notes from '../../../public/notes.png'
import mail from '../../../public/mail.png'
import file from '../../../public/file.png'
import { Card, Col, Row } from "antd"
import AdminTimeline from "../components/adminTimeline"
import Datagrid_template from "../components/templates/Datagrid"
import { coreValuesColumns } from "../data/datagrid_cols"
import Image from 'next/image'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Admin from "../components/dashboard"
import SignForm from "@/app/signIn/page"
import AdminPage from "@/app/admin/page"



export default function Dashboard({ addTab }: { addTab?: () => void }) {

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
    const editDeadline = (
        <SignForm />
    )

    const added: any = [
        { id: 1, label: 'added', children: editDeadline, }
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
                        <p className='pb-5 px-5 text-xl text-black flex justify-center items-center'>Project Deadlines</p>
                        <div className='w-full h-full'>
                            <AdminTimeline />
                        </div>
                    </div>
                    {/* bottom */}
                    <div className=' w-full full mt-3 shadow-lg rounded'>
                        <div className='w-full h-full grid grid-cols-2  '>
                            {operators.map(({ id, label, img }) => {
                                return (
                                    <div key={id} onClick={addTab} className='w-full p-8 flex-col justify-center items-center'>
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
