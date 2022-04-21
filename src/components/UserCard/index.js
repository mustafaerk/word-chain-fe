import React from "react";
import PropTypes from "prop-types";

import { avatarList } from "constant/Avatar";

const UserCard = ({ avatarId, username, point, isActive }) => {
  return (
    <div
      className={` ${
        isActive ? "bg-purple" : "bg-primary"
      } rounded-md h-28 text-white flex items-center justify-center space-x-4 mx-auto`}
    >
      <div className="bg-darkGray rounded-full pb-2 px-2 relative w-16">
        <img src={avatarList[avatarId]} alt="" className="w-16 h-16 object-cover" />
      </div>
      <div className="flex flex-col w-1/2">
        <span className="text-base text-white font-semibold">{username}</span>
        <span className="text-xs text-lightGray">{point} point</span>
      </div>
    </div>
  );
};

export default UserCard;

UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  avatarId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
