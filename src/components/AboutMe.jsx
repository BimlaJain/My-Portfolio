import React from 'react'
import Image from 'next/image'
import Heading from './common/Heading'
import { KNOWLEDGE } from '@/utils/helper'
import Paragraph from './common/Paragraph'

const AboutMe = () => {
    return (
        <div className="container mx-auto px-5 pt-[69px] pb-12">
            <div className="flex max-lg:flex-col-reverse justify-between items-center gap-8">
                <div className="flex max-lg:hidden justify-center mb-8 md:mb-0">
                    <Image
                        src="/assets/images/png/about-img.png"
                        width={590}
                        height={690}
                        alt="about-me"
                        className="w-full xl:max-w-[590px] lg:max-w-[450px] h-auto object-cover"
                    />
                </div>
                <div className="flex-1">
                    <Heading>About Me</Heading>
                    <Paragraph className='!max-w-[687px] !pb-[22px]'>
                        I believe a well-crafted website is not just about looks, but about solving real problems for users with intuitive design and smooth interactions.<br />
                        With strong skills in HTML, CSS, JavaScript, React, Next.js, Bootstrap and Tailwind CSS, I enjoy turning creative ideas into fully functional websites that work seamlessly across devices. What excites me most is bringing designs to life while focusing on performance, accessibility, and user experience.
                    </Paragraph>

                    {KNOWLEDGE.map((obj, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1 xl:text-2xl text-xl font-semibold leading-auto py-2">
                                <span>{obj.title}</span>
                                <span>{obj.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-orange-500 h-2 rounded-full"
                                    style={{ width: `${obj.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe
