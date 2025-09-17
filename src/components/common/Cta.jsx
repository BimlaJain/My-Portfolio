import React from "react";

const Cta = ({ children, className = "" }) => {
    return (
        <button data-aos="fade-up"
            aria-label={children}
            className={`${className} md:px-[29px] px-5 md:py-[9.5px] py-2 rounded-[5px] bg-orange hover:shadow hover:bg-white hover:text-orange transition-colors ease-linear duration-300  sm:text-custom-2xl text-lg font-normal text-white items-center cursor-pointer border border-solid border-transparent hover:border-orange`}
        >
            {children}
        </button>
    );
};

export default Cta;
