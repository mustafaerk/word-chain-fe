import React from "react";
import PropTypes from "prop-types";

import { avatarList } from "constant/Avatar";

function UserCard({ id, name, point, isActive, avatarId }) {
  return (
    <div
      id={id}
      className={`flex items-center justify-around md:flex-row flex-col text-white ${
        isActive ? "md:bg-purple" : "md:bg-primary"
      }  rounded-lg p-2`}
    >
      <div
        className={`user-card-img-area rounded-full ${
          isActive ? "bg-lightPurple md:bg-darkGray" : "bg-sky"
        }`}
      >
        <img
          className="user-card-img rounded-full"
          width={100}
          src={avatarList[avatarId]}
          alt="Icon"
        />
      </div>

      <div className="user-card-name-point-area flex flex-col gap-y-2 md:items-start items-center">
        <span className="user-card-name text-xl">{name}</span>
        <span className="user-card-point text-xs">{point} Points</span>
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
