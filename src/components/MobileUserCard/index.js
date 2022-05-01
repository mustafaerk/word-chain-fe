import React from "react";
import PropTypes from "prop-types";

import { avatarList } from "constant/Avatar";

function MobileUserCard({ id, name, point, isActive, avatarId }) {
  return (
    <div
      id={id}
      className={`transition-all flex gap-y-1 items-center justify-around ${isActive ? "scale-105" : ""} flex-col text-white px-2 py-4`}
    >
      <div
        className={`rounded-full ${isActive ? "bg-lightPurple md:bg-darkGray" : "bg-sky"
          }`}
      >
        <img
          className="rounded-full w-16"
          src={avatarList[avatarId]}
          alt="Icon"
        />
      </div>

      <div className="w-16 flex flex-col md:items-start items-center">
        <div className={`${isActive ? "text-white" : "text-skyDark"} text-sm`}>{name}</div>
        <div className={`${isActive ? "block" : "hidden"} text-2xs text-skyDark`}> {point} Points</div>
      </div>
    </div>
  );
}

MobileUserCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  avatarId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  point: PropTypes.number,
  isActive: PropTypes.bool,
};
MobileUserCard.defaultProps = {
  id: "MobileUserCard",
  point: 0,
  isActive: false,
};

export default MobileUserCard;
