const Heading = ({ children, className = "", center }) => {
    return (
        <h2 data-aos="fade-up"
            className={`${className} font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl !leading-119 text-black ${center ? "mx-auto text-center" : "text-start"
                }`}
        >
            {children}
        </h2>
    );
};

export default Heading;
