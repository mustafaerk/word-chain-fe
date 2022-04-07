import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import "./Row.scss";

const Row = ({ children, className }) => {
  const crrLang = useSelector((state) => state.localization.lang);

  return (
    <div
      className={`${
        crrLang === "ar" ? "row__reverse" : "row__default"
      } ${className}`}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  children: React.ReactNode,
  className: PropTypes.string,
};

export default Row;
