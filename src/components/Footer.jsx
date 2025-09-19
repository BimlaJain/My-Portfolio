import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS , SOCIAL_LINKS} from '@/utils/helper'

const Footer = () => {
  return (
      <div className=" bg-off-white lg:pt-20 md:pt-14 pt-10">
          <div className="container mx-auto px-5">
              <div className="flex items-center justify-center lg:mb-[62px] md:mb-12 mb-9 ">
                  <Link href="/">
                      <Image
                          width={261}
                          height={97}
                          src="/assets/images/png/logo.png"
                          alt="logo"
                          className="max-xl:max-w-[170px] xl:h-[97px]"
                      />
                  </Link>
              </div>
              <div className='flex flex-wrap justify-center gap-6 lg:gap-12 lg:mb-20 md:mb-14 mb-10'>
                  {NAV_LINKS.map((obj, index) => (
                      <Link
                          className="capitalize font-normal xl:text-custom-2xl text-lg tracking-wider  text-black relative after:absolute after:w-0 after:h-[1px] after:-bottom-1 after:start-1/2 after:-translate-x-1/2 after:bg-black hover:after:w-full after:duration-300 "
                          href={obj.url}
                          key={index}
                      >
                          {obj.title}
                      </Link>
                  ))}
              </div>
              <div className="flex justify-center items-center gap-6 lg:pt-9 pt-5 pb-[62px]">
                  {SOCIAL_LINKS.map((obj, index) => (
                      <Link
                          className="hover:scale-110 transition-transform duration-300"
                          href={obj.url}
                          key={index} target='_blank'
                      >
                          <Image src={obj.icon} width={32} height={32} alt={obj.alt} />
                      </Link>
                  ))}
              </div>
          </div>
          <p className="text-center bg-grey md:text-custom-2xl text-lg text-white lg:py-[26px] py-5">
              &copy; {new Date().getFullYear()} <span className='text-orange'>BimlaDev</span> All Rights Reserved, Inc.
          </p>
      </div>
  )
}

export default Footer
