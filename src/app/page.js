"use client";
// import Header from '@/components/common/Header';
// import Hero from '@/components/Hero';
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <Header />
//       <Hero/>
//     </div>
//   )
// }

// export default page

import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import MyProjects from "@/components/MyProjects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <AboutMe/>
      <Services/>
      <MyProjects />
      <Testimonials/>
      <Contact/>
    <Footer/>
    </div>
  );
}
