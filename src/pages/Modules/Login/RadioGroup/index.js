import React from "react";
import { RadioGroup } from "@headlessui/react";
import PropTypes from "prop-types";

import { avatars } from "constant/Avatar";

export default function AvatarRadioGroup({
  selectedAvatar,
  setSelectedAvatar,
}) {
  return (
    <RadioGroup
      className="grid sm:grid-cols-4 grid-cols-3 sm:grid-rows-4 grid-rows-6 gap-1"
      value={selectedAvatar}
      onChange={setSelectedAvatar}
    >
      {avatars.map((avatar, idx) => (
        <RadioGroup.Option
          key={avatar.val + idx}
          value={avatar}
          className={({ checked }) =>
            `${
              checked
                ? "bg-purple bg-opacity-75 text-white border-white border"
                : "bg-white"
            } md:w-32 md:h-32  h-28 w-28 relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
          }
        >
          {() => (
            <img
              className="w-full h-full border-darkGray bg-darkGray rounded-full border"
              src={avatar.icon}
              alt=""
            />
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

AvatarRadioGroup.propTypes = {
  selectedAvatar: PropTypes.any.isRequired,
  setSelectedAvatar: PropTypes.func.isRequired,
};
