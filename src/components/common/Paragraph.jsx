const Paragraph = ({ children, className = "", white, grey }) => {
    return (
        <p className={`${className} xl:text-custom-2xl text-lg sm:tracking-wider font-normal`}>
            {children}
        </p>
    );
};

export default Paragraph;
