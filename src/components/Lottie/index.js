import React, { useLayoutEffect, useRef } from "react";
import lottie from "lottie-web";
import PropTypes from "prop-types";


const Lottie = ({ animation, containerClass }) => {
    const anime = useRef(null);
    useLayoutEffect(() => {
        lottie.loadAnimation({
            container: anime.current,
            renderer: "svg",    
            loop: true,
            autoplay: true,
            animationData: animation,
        });
        return () => lottie.stop();
    }, []);
    return <div className={containerClass} ref={anime}></div>;
};

Lottie.propTypes = {
    animation: PropTypes.any.isRequired,
    containerClass: PropTypes.string,
};

export default Lottie;