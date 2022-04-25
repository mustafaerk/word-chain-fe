import React from 'react'
import PropTypes from "prop-types";

const Main = ({ children }) => {
    return (
        <div className='main__background'>
            <div className="container mx-auto w-screen h-screen py-0 md:py-16">
                {children}
            </div>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Main;