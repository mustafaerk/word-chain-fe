import React from "react";
import PropTypes from "prop-types";

import CloseIcon from "assets/icons/x.svg";

export default function Popup({
  children,
  isOpen,
  handlePopupClose,
  PopupContentClass,
  PopupClass,
}) {
  return (
    <div className={`${isOpen ? "block" : "hidden"} fixed w-full h-full top-0 right-0`}>
      <div
        onClick={handlePopupClose}
        className="fixed w-full h-full z-40"
      ></div>
      <div
        className={`${PopupClass} w-72 md:w-1/3 popup p-6 fixed h-auto z-50 max-w-2xl rounded-2xl`}
      >
        <div className={`${PopupContentClass}`}>{children}</div>
        <img
          src={CloseIcon}
          className="absolute cursor-pointer top-0 right-0 w-6 h-6 md:w-7 md:h-7"
          onClick={handlePopupClose}
        />
      </div>
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  PopupContentClass: PropTypes.string,
  PopupClass: PropTypes.string,
  children: PropTypes.any,
  handlePopupClose: PropTypes.func.isRequired,
};

Popup.defaultProps = {
  isOpen: false,
};
