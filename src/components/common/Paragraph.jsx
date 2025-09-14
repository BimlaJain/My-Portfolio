const Paragraph = ({ children, className = "", white, grey }) => {
    return (
        <p data-aos="fade-up"
            className={`${className} ${white ? "text-white" : grey ? "text-grey" : "text-black"
                } text-base !leading-148 font-normal opacity-70 tracking-normal !font-roboto`}
        >
            {children}
        </p>
    );
};

export default Paragraph;
