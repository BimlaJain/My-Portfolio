import React from 'react'

const Services = () => {
  return (
      <div className="bg-gray-50 py-16 px-8">
          <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-semibold mb-2">Services</h2>
              <p className="max-w-xl mx-auto text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus metus in. Aliquet donec morbi convallis pretium.
              </p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                  { title: "UI/UX", desc: "Lorem ipsum dolor sit amet consectetur. Morbi orci nisl donec interdum." },
                  { title: "Web Design", desc: "Lorem ipsum dolor sit amet consectetur. Morbi orci nisl donec interdum." },
                  { title: "App Design", desc: "Lorem ipsum dolor sit amet consectetur. Morbi orci nisl donec interdum." },
                  { title: "Graphic Design", desc: "Lorem ipsum dolor sit amet consectetur. Morbi orci nisl donec interdum." },
              ].map(({ title, desc }) => (
                  <div key={title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-default">
                      <h3 className="text-xl font-semibold mb-2">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default Services
