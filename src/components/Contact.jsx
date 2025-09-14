import React from 'react'

const Contact = () => {
  return (
      <div className="max-w-6xl mx-auto px-8 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Lets Design Together</h2>
          <p className="max-w-xl mx-auto mb-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus metus in. Aliquet donec morbi convallis pretium.
          </p>
          <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 flex-grow"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition">
                  Contact Me
              </button>
          </form>
      </div>
  )
}

export default Contact
