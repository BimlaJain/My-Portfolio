import { CATAGORIES, PROJECTS } from '@/utils/helper';
import React, { useState } from 'react';
import Heading from './common/Heading';
import Paragraph from './common/Paragraph';
import Link from 'next/link';
import Image from 'next/image';

const MyProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === selectedCategory);

    return (
        <div className="container mx-auto px-8">
            <Heading className="!text-center">My Projects</Heading>
            <Paragraph className="!max-w-[930px] !mx-auto !text-center !pb-10">
                I have worked on a variety of web projects that showcase my skills in
                building responsive, interactive, and user-friendly websites. I focus
                on writing efficient code, creating smooth user experiences, and
                turning creative ideas into functional solutions. My projects highlight
                my expertise in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
                and Bootstrap, with attention to performance, accessibility, and modern
                design practices.
            </Paragraph>
            <div className="flex justify-center mb-12">
                <div className=" overflow-x-auto scrollbar-hide space-x-4 sm:justify-center inline-flex">
                    {CATAGORIES.map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded text-lg sm:text-xl border whitespace-nowrap ${selectedCategory === cat
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                                } transition`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {filteredProjects.map(({ title, img, category, url }) => (
                    <Link
                        key={title}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-xl transition block w-full max-w-sm"
                    >
                        <div className="relative w-full h-56">
                            <Image src={img} alt={title} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                            <p className="text-xs text-orange-500 font-bold mb-2">{category}</p>
                            <h3 className="text-lg font-semibold">{title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default MyProjects;
