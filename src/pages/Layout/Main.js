import React from 'react'
import PropTypes from "prop-types";

const Main = ({ children }) => {
    return (
        <div className='main__background'>
            <div className="container flex flex-col sm:block w mx-auto w-screen -scroll-m-9 overflow-y-hidden h-screen py-0 md:py-16 px-0 lg:px-12">
                {children}
            </div>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Main;