import React from "react";
import PropTypes from "prop-types";

function Button({ id, buttonIcon, buttonText, buttonClass, borderType, variant, onClick }) {
  const handleButtonColor = () => {
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "purple":
        return "bg-purple";
      case "shadowPrimary":
        return "bg-primary shadow-primary";
      case "shadowSecondary":
        return "bg-secondary shadow-secondary";
      case "shadowPurple":
        return "bg-purple shadow-purple";
      default:
        break;
    }
  };
  const handleBorder = () => {
    if (borderType) return "border";
  };
  return (
    <div
      id={id}
      className={`flex items-center justify-center text-white gap-x-2 shadow-3xl ${handleButtonColor()} ${handleBorder()} w-full cursor-pointer rounded-lg mx-1 my-1 h-12 ${buttonClass}`}
      onClick={onClick}
    >
      <img className="" width={25} src={buttonIcon} alt="Icon" />
      <span>
        {buttonText ?? null} {borderType}
      </span>
    </div>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  buttonIcon: PropTypes.any.isRequired,
  buttonText: PropTypes.string,
  buttonClass: PropTypes.string,
  borderType: PropTypes.bool,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  borderType: false,
  variant: "primary",
  onClick: () => { },
  buttonClass: "",
};

export default Button;
