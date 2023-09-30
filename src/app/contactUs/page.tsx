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
            <p className='w-full  p-2 text-3xl font-bold text-black flex justify-center items-center'>
                Supercharge Your Project with Cutting-Edge Tech Solutions
            </p>
            <p className='w-full  p-1 text-xl text-black flex justify-center items-center'>
                Connect with Our Expert Team to Bring Your Vision to Life.
            </p>
            <div className='w-full flex justify-between'>
                <div className='w-2/5'>
                    <Timeline_Component />
                </div>

                <div className='w-3/5 mx-5 p-10 shadow-2xl border-[1px] rounded my-2'>
                    <Form
                        labelCol={{ span: 10 }}
                        // wrapperCol={{ span: 16 }}
                        className='w-full '
                    >
                        {/* horizontal layout */}
                        <div className='w-full flex '>
                            <div className='w-1/2'>
                                {inputs1.map(({ id, label, stateName, defaultValue, style }) => {
                                    return (
                                        <>
                                            <InputTemplate
                                                label={label}
                                                isAllowClear={false}
                                                isRequired={false}
                                                setInputValue={function (value: any): void {
                                                    throw new Error('Function not implemented.')
                                                }}

                                            />
                                        </>
                                    )
                                })}

                            </div>

                            <div className='w-1/2'>
                                {inputs2.map(({ id, label, stateName, defaultValue, style }) => {
                                    return (
                                        <>
                                            <InputTemplate
                                                label={label}
                                                isAllowClear={false}
                                                isRequired={false}
                                                setInputValue={function (value: any): void {
                                                    throw new Error('Function not implemented.')
                                                }}

                                            />
                                        </>
                                    )
                                })}

                            </div>

                        </div>

                        {/* Select category */}

                        <div className='w-full '>
                            {selects1.map(({ id, label, optionsData, idExpr, dataExpr, defaultValue, stateName, style }) => {
                                return (
                                    <>
                                        <SelectTemplate
                                            label={label}
                                            labelCol={5}
                                            wrapperCol={7}
                                            options={optionsData}
                                            idexpr={idExpr}
                                            dataexp={dataExpr}
                                            useCallFunc
                                            isRequired={true}
                                            selectedValue={() => { }}
                                            requiredPrompt={''}
                                        />
                                    </>
                                )
                            })}
                        </div>
                        {/* textarea */}
                        <div className='w-full '>
                            {textArea1.map(({ id, label, defaultValue, stateName, style }) => {
                                return (
                                    <div key={id}>
                                        <TextArea_template

                                            label={label}
                                            inputType={'text'}
                                            labelCol={5}
                                            wrapperCol={24}
                                            placeholder={defaultValue}
                                            isAllowClear={false}
                                            isRequired={false}
                                            isShowCount={true}
                                            maxLength={100}
                                            requiredPrompt={''}
                                            textareaStyle={{ height: '100px' }}
                                            setInputValue={() => { }}
                                            height={100} />
                                    </div>
                                )
                            })}
                        </div>

                        {/* budget */}

                        <div className='w-full '>
                            {selects2.map(({ id, label, optionsData, idExpr, dataExpr, defaultValue, stateName, style }) => {
                                return (
                                    <>
                                        <SelectTemplate
                                            label={label}
                                            labelCol={5}
                                            wrapperCol={7}
                                            options={optionsData}
                                            idexpr={idExpr}
                                            dataexp={dataExpr}
                                            useCallFunc
                                            isRequired={true}
                                            selectedValue={() => { }}
                                            requiredPrompt={''}
                                        />
                                    </>
                                )
                            })}
                        </div>

                        {/* calender */}
                        <Form.Item

                            label={<p className=''>{"Schedule a meeting"}</p>}
                            labelCol={{ span: 5 }}
                            className='flex'
                        >
                            <div className='flex border-[1px]' >
                                <Calendar
                                    fullscreen={false}
                                    onSelect={(e: any) => { alert(e) }}
                                />
                            </div>
                        </Form.Item>


                        <div className='w-full flex justify-end'>
                            <Button className='w-[20%] bg-blue-gray-300' type="primary" size={"large"}>
                                Submit
                            </Button>
                        </div>

                    </Form>


                </div>

            </div>
        </div>
    )
}
