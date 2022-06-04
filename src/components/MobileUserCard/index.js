import React from "react";
import PropTypes from "prop-types";

import { avatarList } from "constant/Avatar";
import { flagList } from "constant/flags";

function MobileUserCard({ id, name, point, isActive, avatarId, isEliminated, language }) {
  return (
    <div
      id={id}
      className={`${isEliminated ? "opacity-40" : null} transition-all flex space-y-1 items-center justify-around ${isActive ? "scale-105" : ""} flex-col text-white px-2 py-4`}
    >
      <div
        className={`rounded-full relative ${isActive ? "bg-lightPurple md:bg-darkGray" : "bg-sky"
          }`}
      >
        <img
          className="rounded-full w-16"
          src={avatarList[avatarId]}
          alt="Icon"
        />

        <img
          className="flag rounded-full w-6 md:w-6 absolute"
          src={flagList[language]}
          alt="Icon"
        />
      </div>

      <div className="w-16 flex flex-col md:items-start items-center">
        <div className={`${isActive ? "text-white" : "text-skyDark"} text-sm`}>{name}</div>
        {point ? <div className={`${isActive ? "block" : "hidden"} text-2xs text-skyDark`}> {point} Points</div> : null}
      </div>
    </div>
  );
}

MobileUserCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  avatarId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  point: PropTypes.number,
  isActive: PropTypes.bool,
  isEliminated: PropTypes.bool,
};
MobileUserCard.defaultProps = {
  id: "MobileUserCard",
  point: 0,
  isActive: false,
};

export default MobileUserCard;
