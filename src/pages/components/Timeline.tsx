import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";



export default function Timeline_Component() {
    return (
        <div className="mx-[5rem] ">
            <div className='flex-col w-full  text-black justify-center items-center'>
                <p className='py-3 text-4xl  '>What happens Next ?</p>
                {/* from us */}
                {/* <p className='p-1 text-base'>We will get back to you within <span className='font-bold'>24 hours</span></p> */}
                {/* <p className='p-1 text-base mb-1'>You are a step closer to building great software</p> */}
            </div>
            <Timeline>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src="/img/team-1.jpg" alt="user 1" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            After submission,
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography color="gary" className="font-normal text-gray-600">
                            <ol>
                                <li>
                                    <p className='p-0.5 text-base'>We will get back to you within <span className='font-bold'>24 hours</span></p>

                                </li>
                                <li>
                                    <p className='p-0.5 text-base'>We’ll sign an <span className='font-bold'>NDA </span>if requested. </p>

                                </li>
                                <li>
                                    <p className='p-0.5 text-base'>You’ll be talking to product and tech experts <span className='font-bold'>(no account managers).</span></p>

                                </li>
                                <li>

                                </li>
                            </ol>
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src="/img/team-2.jpg" alt="user 2" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            Business Project

                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography color="gary" className="font-normal text-gray-600">
                            The key to more success is to have a lot of pillows. Put it this way, it took me
                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                            luv.
                        </Typography>
                    </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                    {/* <TimelineConnector /> */}
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src="/img/team-2.jpg" alt="user 2" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            E-Learning / School Projects Category
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8">
                        <Typography color="gary" className="font-normal text-gray-600">
                            The key to more success is to have a lot of pillows. Put it this way, it took me
                            twenty five years to get these plants, twenty five years of blood sweat and tears, and
                            I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                            luv.
                        </Typography>
                    </TimelineBody>
                </TimelineItem>

            </Timeline>
        </div>
    );
}
