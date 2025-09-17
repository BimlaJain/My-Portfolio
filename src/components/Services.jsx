import React from 'react'
import Image from 'next/image'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import { SERVICES } from '@/utils/helper'

const Services = () => {
  return (
      <div className="pb-16">
          <div className="container px-5 mx-auto text-center mb-12">
              <Heading className='!text-center'>Services</Heading>
              <Paragraph className='!max-w-[932px] !mx-auto'>I specialize in building modern, responsive, and high-performance websites using the latest web technologies. My focus is on creating clean, user-friendly designs that deliver a seamless experience across all devices.</Paragraph>
          </div>
          <div className=" container mx-auto flex justify-center flex-wrap gap-8">
              {SERVICES.map(({ title, description , icon }) => (
                  <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg max-w-[350px] h-[340px] overflow-y-auto transition cursor-default">
                      <Image src={icon} alt="svg" width={75} height={75}  />
                      <h3 className="text-custom-3xl font-semibold my-3">{title}</h3>
                      <Paragraph className='!text-custom-xs'> { description}</Paragraph>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Services
