import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MiniUserCard, Button } from "components";
import BackIcon from "assets/icons/back.svg";

import {
  clearRoom,
  updateRoomFinishStatus,
  updateWinnerUser,
} from "redux/slices/room/roomSlice";

import { userInfoSelector } from "redux/slices/user/userSlice";

const UpperArea = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector(userInfoSelector);

  const handleLeaveRoom = () => {
    dispatch({ type: "LEAVE_ROOM" });
    dispatch(clearRoom());
    dispatch(updateRoomFinishStatus(false));
    dispatch(updateWinnerUser({}));
    navigate("/rooms");
  };

  return (
    <div className="hidden md:flex relative my-4 h-h5 rounded-b-md justify-between">
      <Button
        borderType={false}
        buttonIcon={BackIcon}
        onClick={handleLeaveRoom}
        buttonClass="mr-auto w-6"
      />
      <MiniUserCard
        id="myCard"
        avatarId={userInfo.userAvatarId}
        name={userInfo.name}
      />
    </div>
  );
};

export default UpperArea;