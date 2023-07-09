"use client"
import Timeline_Component from '@/pages/components/Timeline'
import InputTemplate from '@/pages/components/templates/inputTemplate'
import { SelectTemplate } from '@/pages/components/templates/selectTemplate'
import { TextArea_template } from '@/pages/components/templates/textArea_template'
import { Input, Select, Textarea, } from '@/pages/interfaces/general'
import { Button, Calendar, Form } from 'antd'
import React from 'react'

export default function Contact_Us() {

    const inputs1: Input[] = [
        { id: 0, label: 'Full Name', stateName: '', defaultValue: '', style: '' },
        { id: 1, label: 'Email', stateName: '', defaultValue: '', style: '' },
    ]
    const inputs2: Input[] = [
        { id: 0, label: 'Business Name', stateName: '', defaultValue: '', style: '' },
        { id: 1, label: 'Website', stateName: '', defaultValue: '', style: '' },
    ]

    const selects1: Select[] = [
        { id: 0, label: 'Select Category', idExpr: '', dataExpr: '', optionsData: [], stateName: '', defaultValue: '', style: '' },
    ]
    const selects2: Select[] = [
        { id: 0, label: 'Select Budget', idExpr: '', dataExpr: '', optionsData: [], stateName: '', defaultValue: '', style: '' },
    ]

    const textArea1: Textarea[] = [
        { id: 0, label: 'Project Description', stateName: '', defaultValue: '', style: '' },

    ]
    return (
        <div className='w-full h-full '>
            <p className='w-full bg-red-500 p-5 text-5xl text-black flex justify-center items-center'>Hello Hire a developer</p>
            <div className='w-full flex justify-between'>
                <div className='w-2/5'>
                    <Timeline_Component />
                </div>

                <div className='w-3/5  p-10 shadow-2xl border-[1px] rounded mb-2'>
                    <Form
                        layout='inline'
                        name="basic"
                        labelCol={{ span: 11 }}
                        wrapperCol={{ span: 24 }}
                        initialValues={{ remember: true }}
                        className='w-full mb-1 '
                        autoComplete="off"
                    >
                        <>
                            {inputs1.map(({ id, label, stateName, defaultValue }) => {
                                return (
                                    <div className='flex pr-[100px]'>
                                        <InputTemplate
                                            label={label}
                                            placeholder={defaultValue}
                                            isAllowClear={false}
                                            isRequired={false}

                                            setInputValue={(e: any) => { console.log(e) }}
                                        />
                                    </div>
                                )
                            })}

                        </>
                    </Form>

                    <Form
                        layout='inline'
                        name="basic"
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 22 }}
                        initialValues={{ remember: true }}
                        className='w-full mb-1 '
                        autoComplete="off"

                    >
                        <>
                            {inputs2.map(({ id, label, stateName, defaultValue, style }) => {
                                return (

                                    <div className='pr-[75px]'>
                                        <InputTemplate
                                            label={label}
                                            inputType={label === "Website" ? 'url' : 'text'}
                                            inputError={label === "Website" ? "Invalid link eg. http://bytwave.com" : ""}
                                            placeholder={defaultValue}
                                            isAllowClear={false}
                                            isRequired={false}
                                            // inputStyles={{ width: '400px' }}
                                            setInputValue={(e: any) => { console.log(e) }}
                                        />
                                    </div>

                                )
                            })}

                        </>
                    </Form>

                    {/*  */}

                    <div className='my-5'>
                        {selects1.map(({ id, label, idExpr, dataExpr, optionsData, stateName, defaultValue, style }) => {
                            return (
                                <div>
                                    <SelectTemplate
                                        label={label}
                                        labelCol={4}

                                        requiredPrompt={label}
                                        options={optionsData}
                                        idexpr={idExpr}
                                        dataexp={dataExpr}
                                        selectedValue={(e) => { console.log(e) }}
                                        isRequired={true}
                                        useCallFunc
                                        placeHolder={defaultValue}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/*  */}

                    <>
                        {textArea1.map(({ id, label, defaultValue, stateName, style }) => {
                            return (
                                <>
                                    <TextArea_template
                                        label={label}
                                        inputType={'text'}
                                        placeholder={''}
                                        textareaStyle={{ height: '100px' }}
                                        isAllowClear={false}
                                        isRequired={false}
                                        isShowCount={true}
                                        maxLength={100}
                                        requiredPrompt={''}
                                        height={400}
                                        setInputValue={function (value: any): void {
                                            throw new Error('Function not implemented.')
                                        }} />
                                </>
                            )
                        })}
                    </>

                    {/*  */}


                    <div className='my-5'>
                        {selects2.map(({ id, label, idExpr, dataExpr, optionsData, stateName, defaultValue, style }) => {
                            return (
                                <div>
                                    <SelectTemplate
                                        label={label}
                                        labelCol={4}
                                        requiredPrompt={label}
                                        options={optionsData}
                                        idexpr={idExpr}
                                        dataexp={dataExpr}
                                        selectedValue={(e) => { console.log(e) }}
                                        isRequired={true}
                                        useCallFunc
                                        placeHolder={defaultValue}
                                    />
                                </div>
                            )
                        })}
                    </div>

                    {/*  */}

                    <Form
                        layout='horizontal'
                    >
                        <Form.Item

                            label={<p className=''>{"Schedule a meeting"}</p>}
                            labelCol={{ span: 4 }}
                            className='flex'
                        >
                            <div className='flex border-[1px]' >
                                <Calendar
                                    fullscreen={false}
                                    onSelect={(e: any) => { alert(e) }}
                                />
                            </div>
                        </Form.Item>
                    </Form>

                    {/*  */}

                    <div className='w-full flex justify-end'>
                        <Button className='w-[20%] bg-blue-gray-300' type="primary" size={"large"}>
                            Submit
                        </Button>
                    </div>


                </div>

            </div>
        </div>
    )
}
