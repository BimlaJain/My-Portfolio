import React from "react";

const Cta = ({ children, className = "" }) => {
    return (
        <button data-aos="fade-up"
            aria-label={children}
            className={`${className} px-[29px] py-[9.5px] rounded-[5px] bg-orange hover:shadow hover:bg-white hover:text-orange transition-colors ease-linear duration-300  text-custom-2xl font-normal text-white items-center cursor-pointer border border-solid border-transparent hover:border-orange`}
        >
            {children}
        </button>
    );
};

export default Cta;
