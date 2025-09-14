import React from 'react'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const AboutMe = () => {
    const aboutRef = useRef(null);
    useEffect(() => {
        // GSAP animations on scroll for About Me section
        gsap.from(aboutRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
            },
        });
    }, []);
  return (
          <div className="max-w-6xl mx-auto px-8 py-16" ref={aboutRef}>
              <h2 className="text-3xl font-semibold mb-6">About Me</h2>
              <div className="md:flex md:space-x-12">
                  <img
                      src="/profile-pointing.jpg"
                      alt="Fawzi pointing"
                      className="w-56 rounded-lg mb-8 md:mb-0"
                  />
                  <div>
                      <p className="mb-8 text-gray-600 max-w-xl leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus metus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
                      </p>
                      {/* Skills */}
                      {[
                          { name: "Website Design", level: 85 },
                          { name: "App Design", level: 80 },
                          { name: "Graphic Design", level: 75 },
                      ].map(({ name, level }) => (
                          <div key={name} className="mb-4">
                              <div className="flex justify-between mb-1 text-sm font-medium">
                                  <span>{name}</span>
                                  <span>{level}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                  <div
                                      className="bg-orange-500 h-2 rounded-full"
                                      style={{ width: `${level}%` }}
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
