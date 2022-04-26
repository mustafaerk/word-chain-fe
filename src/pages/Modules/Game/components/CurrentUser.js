import React from "react";
import PropTypes from "prop-types";

import PointIcon from "assets/icons/point.svg";
import { UserCard } from "components";

const CurrentUser = ({ point }) => {
  return (
    <div className="flex box-border h-36 gap-y-2">
      <div className="bg-transparent md:bg-primary flex p-2 w-full md:w-3/4 m-2 rounded-xl ">
        <UserCard avatarId={"1"} point={10} name={"Ahmet"} isActive={false} />
      </div>
      <div className="hidden md:flex md:flex-col w-1/4 bg-primary h-full items-center justify-center rounded-xl   ">
        <img src={PointIcon} alt="point" className="w-16" />
        <span className="text-xl text-white font-semibold"> {point} </span>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  point: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CurrentUser.defaultProps = {
  point: 0,
};

export default CurrentUser;
