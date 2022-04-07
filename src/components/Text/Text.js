import React from "react";
import PropTypes from "prop-types";

import "./Text.scss";

const Text = ({ children, type, weight }) => {
  const types = {
    sm: "text__small",
    md: "text__medium",
    lg: "text__large",
    xl: "text__Xlarge",
  };

  const weights = {
    normal: "text__normal",
    semibold: "text__semibold",
    bold: "text__bold",
  };

  return (
    <span className={`${types[type] || "text__medium"} ${weights[weight] || "text__normal"}`} >
      {children}
    </span>
  );
};

Text.propTypes = {
  type: PropTypes.string.isRequired,
  weight: PropTypes.string,
  children: React.ReactNode,
};

export default Text;
