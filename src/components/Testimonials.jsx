import React from 'react'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
    const testimonialRef = useRef(null);
    useEffect(() => {
        
        gsap.from(testimonialRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: testimonialRef.current,
                start: "top 90%",
            },
        });
    }, []);
  return (
      <div className="bg-gray-50 py-16 px-8" ref={testimonialRef}>
          <h2 className="text-3xl font-semibold mb-10 text-center">Testimonials</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-center">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus metus in. Aliquet donec morbi convallis pretium.
          </p>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <img
                  src="/testimonial-avatar.jpg"
                  alt="Client"
                  className="w-24 h-24 rounded-full"
              />
              <div className="text-gray-700">
                  <p>
                      “Lorem ipsum dolor sit amet consectetur. In et purus odio dictum cras condimentum elit. In arcu cursus metus, laoreet dapibus porttitor.”
                  </p>
                  <p className="mt-4 font-semibold">Name Surname, CEO</p>
              </div>
          </div>
          {/* Dots for slider mockup */}
          <div className="flex justify-center mt-6 space-x-3">
              <span className="w-3 h-3 rounded-full bg-orange-500"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
              <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          </div>
      </div>
  )
}

export default Testimonials
