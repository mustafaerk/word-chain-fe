import React from "react";
import PropTypes from "prop-types";

function Input({ placeholder, labelText, LabelIcon, onChange, id, inputName }) {
  return (
    <div id={id} className="flex flex-col  gap-y-2 p-1  w-full">
      {labelText && (
        <label className="flex gap-x-2 text-white items-center">
          <img className="w-4 h-4" src={LabelIcon} alt="" />
          <span> {labelText} </span>
        </label>
      )}
      <input
        className="h-12 outline-none bg-primary  p-4 rounded-lg text-lightGray"
        id={inputName}
        name={inputName}
        placeholder={placeholder}
        onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
};
export default Input;
