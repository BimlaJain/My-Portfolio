import React from 'react'
import { useState } from "react";

const MyProjects = () => {
      const [selectedCategory, setSelectedCategory] = useState("All");
      const projects = [
        {
          category: "Web Design",
          title: "AirCailing Landing Page Design",
          img: "/projects/project1.png",
        },
        {
          category: "Web Design",
          title: "Business Landing Page Design",
          img: "/projects/project2.png",
        },
        {
          category: "App Design",
          title: "Ecom Web Page Design",
          img: "/projects/project3.png",
        },
      ];
      const categories = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];
      const filteredProjects =
        selectedCategory === "All"
          ? projects
          : projects.filter((p) => p.category === selectedCategory);
  return (
      <div className="max-w-6xl mx-auto px-8 py-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">My Projects</h2>
          <p className="text-center max-w-xl mx-auto mb-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Mollis est erat aliquam mauris erat risus lectus. Pharetra consectetur vitae tellus.
          </p>
          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12">
              {categories.map((cat) => (
                  <button
                      key={cat}
                      className={`px-4 py-2 rounded ${selectedCategory === cat ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                          } transition`}
                      onClick={() => setSelectedCategory(cat)}
                  >
                      {cat}
                  </button>
              ))}
          </div>
          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredProjects.map(({ title, img, category }) => (
                  <div key={title} className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-xl transition">
                      <img className="w-full h-56 object-cover" src={img} alt={title} />
                      <div className="p-4">
                          <p className="text-xs text-orange-500 font-bold mb-2">{category}</p>
                          <h3 className="text-lg font-semibold">{title}</h3>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}

export default MyProjects
