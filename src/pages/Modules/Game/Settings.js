import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  clearRoom,
  updateRoomFinishStatus,
  updateWinnerUser,
} from "redux/slices/room/roomSlice";
import { MiniUserCard } from "components";
import {
  userInfoSelector,
  selectIsMuted,
  updateIsMuted,
} from "redux/slices/user/userSlice";
import { storageItem } from "utils/localstorage";

import BackIcon from "assets/icons/back.svg";
import MuteIcon from "assets/icons/mute.svg";
import UnMuteIcon from "assets/icons/unmute.svg";
import SettingIcon from "assets/icons/settings.svg";

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSettings, setIsSettings] = useState(false);

  const userInfo = useSelector(userInfoSelector);

  const isMuted = useSelector(selectIsMuted);
  const localStorageField = "muted";

  const handleMuted = () => {
    const reverseMute = !isMuted;
    storageItem("u_muted", { isMuted: reverseMute, localStorageField });
    dispatch(updateIsMuted(reverseMute));
  };

  const handleSettings = () => {
    setIsSettings(!isSettings);
  };

  const handleLeaveRoom = () => {
    dispatch({ type: "LEAVE_ROOM" });
    dispatch(clearRoom());
    dispatch(updateRoomFinishStatus(false));
    dispatch(updateWinnerUser({}));
    navigate("/rooms");
  };

  return (
    <div className="absolute block md:hidden z-10 rounded right-1">
      <div className="relative">
        <img
          src={SettingIcon}
          onClick={handleSettings}
          alt="setting"
          className="w-9 h-9"
        />
        <div
          className={`${
            isSettings ? "top-10" : "-top-56"
          } flex flex-col right-5 rounded-md py-10 px-3 w-40 items-center space-y-4 justify-center w absolute bg-purple h-52 transition-[top] duration-[1000ms] `}
        >
          <MiniUserCard
            id="myCard"
            avatarId={userInfo.userAvatarId}
            name={userInfo.name}
          />
          <img
            src={isMuted ? UnMuteIcon : MuteIcon}
            onClick={handleMuted}
            alt="mute"
            className="w-10 h-10"
          />
          <img
            src={BackIcon}
            onClick={handleLeaveRoom}
            alt="leave"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
