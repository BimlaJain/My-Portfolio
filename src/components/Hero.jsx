import React from 'react'
import Image from 'next/image';
import Cta from './common/Cta';
import { SOCIAL_LINKS } from '@/utils/helper';
import Link from 'next/link';
import Paragraph from './common/Paragraph';

const Hero = () => {
  return (
    <div>
          <div className="container mx-auto px-5 xl:pt-[120px] sm:pt-14 pt-10">
              <div className="flex max-lg:flex-col justify-between items-center">
                  <div className=" flex-col">
                      <h3 className='font-semibold xl:text-2xl text-xl leading-normal'>Hi I am </h3>
                      <h4 className='font-semibold xl:text-custom-3xl text-2xl text-orange'>Bimla Jain</h4>
                      <h5 className='font-bold leading-none xl:text-custom-4xl sm:text-6xl text-4xl'>Frontend</h5>
                      <h5 className='font-bold leading-none xl:text-custom-4xl sm:text-6xl text-4xl relative 2xl:left-[35%] sm:left-[24%] left-[34%]  pb-4 w-[230px]'>Developer</h5>
            <Paragraph className='!max-w-[687px]'>I'm a passionate Frontend Developer specializing in building responsive, user-friendly, and modern web applications. I have strong skills in HTML, CSS, JavaScript, and React/Next.js.<br></br> My goal is to deliver seamless user experiences by writing clean, efficient code and using best practices in performance, accessibility, and SEO.<br></br>
              Always eager to learn new technologies, solve challenging problems, and create beautiful digital experiences.</Paragraph>
            <Cta className='md:!px-14'>Hire Me </Cta>
                  </div>
                  <div className="flex justify-center items-center flex-col">
            <Image src="/assets/images/png/hero-img.png" width={595} height={678} alt='hero-img' className='w-full lg:max-w-[595px] max-w-[400px] ' />
            <div className="flex gap-6 pt-9">
              {SOCIAL_LINKS.map((obj, index) => (
                <Link
                  className="hover:scale-110 transition-transform duration-300"
                  href={obj.url}
                  key={index} target='_blank'
                >
                 <Image src={obj.icon} width={32} height={32} alt={obj.alt}/>
                </Link>
              ))}
            </div>
                  </div>
              </div> 
      </div>
    </div>
  )
}

export default Hero
