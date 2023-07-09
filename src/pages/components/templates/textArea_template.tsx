import React, { useState } from 'react'
import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { kMaxLength } from 'buffer';


interface props {
    label: string;
    inputType: string;
    placeholder: string;
    isAllowClear: boolean;
    isRequired: boolean;
    isShowCount: boolean;
    maxLength: number;
    requiredPrompt: string;
    height: string | number;
    textareaStyle?: any
    setInputValue: (value: any) => void

}

export const TextArea_template = ({ label, textareaStyle, inputType, placeholder, setInputValue, isAllowClear, isRequired, isShowCount, maxLength, requiredPrompt, height }: props) => {
    const [data, setData] = useState<string>()
    return (

        <div>
            <Form.Item
                label={<p className=''>${label}</p>}
                name="username"
                rules={[{ required: isRequired, message: `${requiredPrompt}` }]}
            >
                <TextArea
                    style={...textareaStyle}
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
