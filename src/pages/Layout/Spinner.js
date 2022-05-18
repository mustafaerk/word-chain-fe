import React from 'react'
import PropTypes from "prop-types";

const Spinner = () => {
    return (
        <div className='main__background h-screen' />
    )
}

Spinner.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Spinner;