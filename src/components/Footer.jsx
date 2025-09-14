import React from 'react'

const Footer = () => {
  return (
      <div className="bg-gray-900 text-gray-300 py-8">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 font-bold mb-4 md:mb-0">
                  <img src="/logo.png" alt="BIMLA Logo" className="w-8 h-8" />
                  <span>BIMLA<span className="text-orange-500">.dev</span></span>
              </div>
              <ul className="flex space-x-6 text-sm">
                  {["Home", "About Me", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
                      <li key={item} className="hover:text-orange-500 cursor-pointer">
                          {item}
                      </li>
                  ))}
              </ul>
              <div className="flex space-x-6 text-xl mt-4 md:mt-0">
                  <a href="#" className="hover:text-orange-500"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="hover:text-orange-500"><i className="fab fa-youtube"></i></a>
                  <a href="#" className="hover:text-orange-500"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="hover:text-orange-500"><i className="fab fa-linkedin"></i></a>
              </div>
          </div>
          <p className="text-center text-gray-600 text-sm mt-6">
              &copy; 2023 FawziSayed. All Rights Reserved, Inc.
          </p>
      </div>
  )
}

export default Footer
