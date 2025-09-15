const Heading = ({ children, className = "", center }) => {
    return (
        <h2 data-aos="fade-up"
            className={`${className} font-semibold text-4xl sm:text-5xl lg:text-6xl xl:text-custom-3.5xl leading-normal text-black ${center ? "mx-auto text-center" : "text-start"
                }`}
        >
            {children}
        </h2>
    );
};

export default Heading;
