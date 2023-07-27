"use client"

import React, { useState } from 'react'
import { Form, Input } from 'antd';


interface props {
    label: string;
    labelCol?: number;
    inputType?: string;
    inputError?: string;
    inputStyles?: any
    placeholder?: string;
    isAllowClear: boolean;
    isRequired: boolean;
    setInputValue: (value: any) => void


}

export default function InputTemplate({ label, labelCol, inputError, inputType, inputStyles, placeholder, setInputValue, isAllowClear, isRequired }: props) {
    const [data, setData] = useState<any>()
    return (

        <div className=''>

            <Form.Item
                // labelCol={labelCol ? { span: labelCol } : { span: 3 }}
                label={<p className=''>${label}</p>}
                name="username"
                rules={[{ required: isRequired, message: `${inputError}` }]}
                className='w-full mb-2'

            >
                <Input
                    size={'large'}
                    type={inputType}
                    placeholder={placeholder}
                    onChange={(e: any) => {
                        const InputValue: string | number = e.target.value
                        setData(InputValue)
                        setInputValue(e.target.value)
                    }}
                    allowClear={isAllowClear}
                    value={data}
                // style={...inputStyles}
                />
            </Form.Item >
        </div >
    )
}










