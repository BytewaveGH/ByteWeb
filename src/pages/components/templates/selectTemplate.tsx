

import React, { useState } from 'react'
import { Form, Input, Select } from 'antd';


interface props {
    index?: number | string
    label?: string
    options?: any
    idexpr?: string
    dataexp?: string
    span?: boolean
    disabled?: boolean | undefined
    style?: any
    selectStyle?: any
    extraWidget?: any,
    placeHolder?: any,
    selectedValue?: (object: any) => void,
    handleRefresh?: () => void //refresh click listener
    useCallFunc?: boolean
    labelCol?: number
    wrapperCol?: number
    disabledCustomWidth?: boolean
    isRequired?: boolean
    requiredPrompt: string
    cusWidth?: any
}

export default function SelectTemplate({ label, index, options, idexpr, dataexp, style, selectStyle, extraWidget, disabled = undefined, placeHolder, selectedValue, useCallFunc, labelCol, wrapperCol, requiredPrompt, isRequired }: props) {
    const [data, setData] = useState<any>()
    return (

        <div>
            <Form.Item
                label={<p className=''>${label}</p>}
                name="username"
                rules={[{ required: isRequired }]}
                labelCol={labelCol ? { span: labelCol } : { span: 3 }}
                wrapperCol={wrapperCol ? { span: wrapperCol } : { span: 9 }}
                className='mb-2'
            >

                <div>
                    <Select
                        size='large'

                        showSearch
                        onChange={(object) => {
                            console.log('llds')
                            console.log(object)
                            const selected = JSON.parse(object); //parse data
                            setData(selected[dataexp!]); //set local state with value

                        }}
                        value={data}
                        key={useCallFunc ? (placeHolder ? placeHolder : '') : data}
                        className={'mb-0'}
                        allowClear={false}
                    // disabled={(disabled !== undefined) ? disabled : formdisabled}
                    // style={{ ...selectStyle, width: `${!disabledCustomWidth ? 'calc(100% - 27.9px)' : cusWidth}` }}
                    >
                        {options?.map((option: any) => {
                            return (
                                <Select.Option key={option[idexpr!]} value={JSON.stringify(option)}>{option[dataexp!]}</Select.Option>
                            )
                        })}
                    </Select>
                </div>

            </Form.Item>
        </div>
    )
}





















