import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
          <div className="container mx-auto px-5">
              <div className="flex  justify-between items-center">
                  <div className="flex flex-col">
                      <h3 className='font-semibold text-2xl leading-normal'>Hi I am </h3>
                      <h4 className='font-semibold text-custom-3xl text-orange'>Bimla Jain</h4>
                      <h5 className='font-bold leading-120 text-custom-4xl'>Frontend</h5>
                      <h5 className='font-bold leading-120 text-custom-4xl relative left-[35%]'>Developer</h5>
                      <p className='text-custom-2xl leading-normal max-w-[607px]'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
                  </div>
                  <div className="flex flex-col">
                     <Image src="/assets/images/png/hero-img.png" width={595} height={678} alt='hero-img'/>
                  </div>
              </div> 
      </div>
    </div>
  )
}

export default Hero
