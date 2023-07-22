"use client"

import React from 'react'
import { Col, Row, Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


export default function Dashboard() {

    const cards = [
        { id: 0, label: '' },
        { id: 1, label: '' },
        { id: 2, label: '' },
    ]
    return (
        <div>
            {/* upper layout */}
            <div className='w-full '>

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
                                        <EditOutlined key="edit" />,
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

            {/* footer layout */}
            <div>

            </div>
        </div>
    )
}
