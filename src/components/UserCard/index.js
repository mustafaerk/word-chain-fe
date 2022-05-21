import React from "react";
import PropTypes from "prop-types";

import { avatarList } from "constant/Avatar";
import { flagList } from "constant/flags";

function UserCard({ id, name, point, isActive, isEliminated, avatarId, isOnline, language }) {
  return (
    <div
      id={id}
      className={`flex items-center justify-between md:flex-row flex-col text-white ${isActive ? "md:bg-purple" : "md:bg-primary"
        } ${isEliminated ? "line-through borderRed text-red" : null} ${isOnline ? null : "opacity-40"}  rounded-lg p-4 gap-x-4`}
    >
      <div
        className={`rounded-full relative ${isActive ? "bg-lightPurple md:bg-darkGray" : "bg-sky"
          }`}
      >
        <img
          className="rounded-full w-16 md:w-16"
          src={avatarList[avatarId]}
          alt="Icon"
        />

        <img
          className="flag rounded-full w-6 md:w-6 absolute"
          src={flagList[language]}
          alt="Icon"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-y-2 md:items-start items-center">
        <div className="text-xl text-white">{name}</div>
        <div className="text-xs text-skyDark"> {point} Points</div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  avatarId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  point: PropTypes.number,
  isActive: PropTypes.bool,
  isEliminated: PropTypes.bool,
  isOnline: PropTypes.bool,
};
UserCard.defaultProps = {
  id: "userCard",
  point: 0,
  isActive: false,
  isEliminated: false,
  isOnline: false,
};

export default UserCard;
