import React from "react";
import PropTypes from "prop-types";

import { avatarList } from "constant/Avatar";

function UserCard({ id, name, point, isActive, avatarId }) {
  return (
    <div
      id={id}
      className={`flex items-center justify-between md:flex-row flex-col text-white ${
        isActive ? "md:bg-purple" : "md:bg-primary"
      }  rounded-lg p-2 gap-x-4`}
    >
      <div
        className={`rounded-full ${
          isActive ? "bg-lightPurple md:bg-darkGray" : "bg-sky"
        }`}
      >
        <img
          className="rounded-full w-16 md:w-16"
          src={avatarList[avatarId]}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarId: PropTypes.number.isRequired,
  point: PropTypes.number,
  isActive: PropTypes.bool,
};
UserCard.defaultProps = {
  point: 0,
  isActive: false,
};

export default UserCard;
