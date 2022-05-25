import React from "react";
import PropTypes from "prop-types";

function ErrorPopup({ id, errorText, isError }) {


  return (
    <div
      id={id}
      className={`${
        isError ? "block" : "hidden"
      } error absolute bg-purple text-white rounded w-fit p-4`}
    >
      {errorText}
      <div className="triangle"></div>
    </div>
  );
}

ErrorPopup.propTypes = {
  id: PropTypes.string,
  errorText: PropTypes.string,
  isError: PropTypes.bool,
};
ErrorPopup.defaultProps = {
  isError: false,
};

export default ErrorPopup;
