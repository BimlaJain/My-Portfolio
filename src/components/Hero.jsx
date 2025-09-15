import React from 'react'
import Image from 'next/image';
import Cta from './common/Cta';
import { SOCIAL_LINKS } from '@/utils/helper';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
          <div className="container mx-auto px-5 pt-[120px]">
              <div className="flex  justify-between items-center">
                  <div className=" flex-col">
                      <h3 className='font-semibold text-2xl leading-normal'>Hi I am </h3>
                      <h4 className='font-semibold text-custom-3xl text-orange'>Bimla Jain</h4>
                      <h5 className='font-bold leading-none text-custom-4xl'>Frontend</h5>
                      <h5 className='font-bold leading-none text-custom-4xl relative left-[35%] pb-4'>Developer</h5>
            <p className='text-custom-2xl leading-normal max-w-[687px] font-normal tracking-widest pb-[22px]'>I'm a passionate Frontend Developer specializing in building responsive, user-friendly, and modern web applications. I have strong skills in HTML, CSS, JavaScript, and React/Next.js.<br></br> My goal is to deliver seamless user experiences by writing clean, efficient code and using best practices in performance, accessibility, and SEO.<br></br>
              Always eager to learn new technologies, solve challenging problems, and create beautiful digital experiences.</p>
            <Cta className='!px-14'>Hire Me </Cta>
                  </div>
                  <div className="flex justify-center items-center flex-col">
            <Image src="/assets/images/png/hero-img.png" width={595} height={678} alt='hero-img' />
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
