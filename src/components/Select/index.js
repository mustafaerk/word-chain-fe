import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import PropTypes from "prop-types";

export default function Select({
  data,
  onChange,
  labelText,
  LabelIcon,
  defaultValue,
}) {
  const [selected, setSelected] = useState({});

  const handleOnChange = (e) => {
    onChange(e);
    setSelected(e);
  };

  useEffect(() => {
    if (defaultValue) {
      const currentVal = data.find((elem) => elem.value == defaultValue);
      setSelected(currentVal);
    }
  }, [defaultValue]);

  return (
    <div className="w-full h-24 gap-y-2 p-1">
      {labelText && (
        <label className="flex gap-x-2 text-white items-center font-semibold">
          {" "}
          <img className="w-4 h-4" src={LabelIcon} alt="" />{" "}
          <span> {labelText} </span>{" "}
        </label>
      )}
      <Listbox value={selected} onChange={handleOnChange}>
        <div className="relative mt-1">
          <Listbox.Button className="bg-primary h-12 text-lightGray relative w-full py-2 pl-3 pr-10 text-left  rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDownIcon
                className="w-5 h-5 text-purple"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-primary text-lightGray rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data.map((item, itemIdx) => (
                <Listbox.Option
                  key={itemIdx}
                  className={({ active }) =>
                    `cursor-default select-none rounded-md relative py-2 pl-10 pr-4 ${
                      active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                    } hover:bg-white hover:text-darkGray`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

Select.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.any.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired
  ),
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  defaultValue: PropTypes.string,
  LabelIcon: PropTypes.any,
};
