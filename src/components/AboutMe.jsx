import React from 'react'
import Image from 'next/image'
import Heading from './common/Heading'
import { KNOWLEDGE } from '@/utils/helper'

const AboutMe = () => {
  return (
          <div className="container mx-auto px-5 pt-[69px] pb-12" >
              <div className="md:flex justify-between items-center md:space-x-12">
                 <Image src="/assets/images/png/about-img.png" width={681} height={690} alt='about-me'/>
              <div>
                  <Heading>About Me </Heading>
                  <p className="text-custom-2xl leading-normal max-w-[687px] font-normal tracking-widest pb-[22px]">
                      I believe a well-crafted website is not just about looks, but about solving real problems for users with intuitive design and smooth interactions.<br></br>
                      With strong skills in HTML, CSS, JavaScript, React, Next.js, Bootstrap and Tailwind CSS, I enjoy turning creative ideas into fully functional websites that work seamlessly across devices.
                      What excites me most is bringing designs to life while focusing on performance, accessibility, and user experience.
                      </p>
                  {KNOWLEDGE.map((obj, index) => (
                      <div key={index} className="mb-4">
                          <div className="flex justify-between mb-1 text-2xl font-semibold leading-auto py-2">
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
