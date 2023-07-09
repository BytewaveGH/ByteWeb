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
        <div className="mx-[5rem] w-[32rem]">
            <div className='flex-col text-black justify-center items-center'>
                <p className='p-1 text-2xl  '>What happens Next ?</p>
                {/* from us */}
                <p className='p-1'>We will get back to you within 24 hours</p>
                <p className='p-1'>You are a step closer to building great software</p>
            </div>
            <Timeline>
                <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src="/img/team-1.jpg" alt="user 1" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            Timeline Title Here.
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
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src="/img/team-2.jpg" alt="user 2" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            Timeline Title Here.
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
                    <TimelineConnector />
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src="/img/team-2.jpg" alt="user 2" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            Timeline Title Here.
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
                    <TimelineHeader>
                        <TimelineIcon className="p-0">
                            <Avatar size="sm" src="/img/team-3.jpg" alt="user 3" withBorder />
                        </TimelineIcon>
                        <Typography variant="h5" color="blue-gray">
                            Timeline Title Here.
                        </Typography>
                    </TimelineHeader>
                    <TimelineBody>
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
