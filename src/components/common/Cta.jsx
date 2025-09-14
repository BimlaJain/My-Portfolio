import React from "react";

const Cta = ({ children, className = "" }) => {
    return (
        <button data-aos="fade-up"
            aria-label={children}
            className={`${className} p-[18px] h-[43px] rounded-[5px] bg-orange hover:shadow hover:bg-white hover:text-orange transition-colors ease-linear duration-300 font-roboto text-custom-2xl !leading-none font-normal text-white items-center capitalize cursor-pointer border border-solid border-transparent hover:border-orange`}
        >
            {children}
        </button>
    );
};

export default Cta;
