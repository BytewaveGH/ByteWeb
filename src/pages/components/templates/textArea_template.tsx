import React, { useState } from 'react'
import { Form, Input } from 'antd';


interface props {
    label?: string;
    inputType?: string;
    placeholder?: string;
    isAllowClear?: boolean;
    isRequired?: boolean;
    isShowCount?: boolean;
    maxLength?: number;
    requiredPrompt?: string;
    height?: string | number;
    labelCol?: number
    wrapperCol?: number
    textareaStyle?: any
    setInputValue: (value: any) => void


}

export default function TextArea_template({ label, textareaStyle, inputType, placeholder, setInputValue, isAllowClear, isRequired, isShowCount, maxLength, requiredPrompt, height, labelCol, wrapperCol }: props) {
    const [data, setData] = useState<string>()
    const { TextArea } = Input;
    return (

        <div>
            <Form.Item
                label={<p className=''>${label}</p>}
                name="username"
                rules={[{ required: isRequired, message: `${requiredPrompt}` }]}
                labelCol={labelCol ? { span: labelCol } : { span: 3 }}
                wrapperCol={wrapperCol ? { span: wrapperCol } : { span: 9 }}
                className='mb-2'
            >
                <TextArea
                    style={{ ...textareaStyle }}
                    className={`o overflow-y-scroll resize-none `}
                    placeholder={placeholder}
                    onChange={(e: any) => {
                        const InputValue: string = e.target.value
                        setData(InputValue)
                        setInputValue(e.target.value)
                    }}
                    allowClear={isAllowClear}
                    value={data}
                    showCount={isShowCount}
                // maxLength={maxLength}
                />
            </Form.Item>
        </div>
    )
}
