import React from "react";
import PropTypes from "prop-types";

function Input({
  placeholder,
  labelText,
  LabelIcon,
  onChange,
  id,
  inputName,
  value,
  onKeyDown,
  disabled,
  autoFocusInput
}) {
  return (
    <div id={id} className="flex flex-col space-y-2 p-1 w-full">
      {labelText && (
        <label className="flex space-x-2 text-white items-center font-semibold">
          <img className="w-4 h-4" src={LabelIcon} alt="" />
          <span> {labelText} </span>
        </label>
      )}
      <input
        className={`h-12 outline-none bg-primary  p-7 rounded-lg text-lightGray ${disabled ? "cursor-not-allowed" : "cursor-auto"}`}
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={15}
        value={value}
        onKeyDown={onKeyDown}
        disabled={disabled}
        autoComplete="off"
        autoFocus={autoFocusInput}
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  inputName: PropTypes.string,
  id: PropTypes.string,
  LabelIcon: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  disabled: PropTypes.bool,
  autoFocusInput: PropTypes.bool,
};
export default Input;
