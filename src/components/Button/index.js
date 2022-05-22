import React from "react";
import PropTypes from "prop-types";

function Button({
  id,
  buttonIcon,
  buttonText,
  buttonClass,
  borderType,
  variant,
  onClick,
  disabled,
}) {
  const handleButtonColor = () => {
    if(disabled){
      return "shadowPrimary";
    }
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "purple":
        return "bg-purple";
      case "green":
        return "bg-green";
      case "shadowPrimary":
        return "bg-primary shadow-primary";
      case "shadowSecondary":
        return "bg-secondary shadow-secondary";
      case "shadowPurple":
        return "bg-purple shadow-purple";
      case "shadowGreen":
        return "bg-green shadow-green";
      default:
        return "bg-transparent";
    }
  };
  const handleBorder = () => {
    if (borderType) return "border";
    return "";
  };

  const handleOnClick = () => {
    if (disabled) {
      return;
    } else {
      onClick();
    }
  };
  return (
    <div
      id={id}
      className={`flex items-center justify-center text-white gap-x-2 shadow-3xl w-full ${handleButtonColor()} ${handleBorder()} cursor-pointer rounded-lg m-1 h-12 ${buttonClass} ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      <img className="" width={25} src={buttonIcon} alt="Icon" />
      <span className="hidden sm:block">
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
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  borderType: false,
  disabled: false,
  onClick: () => {},
  buttonClass: "",
};

export default Button;
