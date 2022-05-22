import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { storageItem } from "utils/localstorage";
import { MiniUserCard } from "components";
import CloseSvg from "assets/icons/x.svg";
import MuteIcon from "assets/icons/mute.png";
import UserList from "pages/Modules/Game/UserList";
import GameGround from "pages/Modules/Game/Game";
import Main from "pages/Layout/Main";
import {
  updateIsMuted,
  selectIsMuted
} from "redux/slices/user/userSlice";
import {
  clearRoom,
  updateRoomFinishStatus,
  updateWinnerUser,
} from "redux/slices/room/roomSlice";

import { userInfoSelector } from "redux/slices/user/userSlice";

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector(userInfoSelector);
  const isMuted = useSelector(selectIsMuted);
  const localStorageField = "muted";


  const handleLeaveRoom = () => {
    dispatch({ type: "LEAVE_ROOM" });
    dispatch(clearRoom());
    dispatch(updateRoomFinishStatus(false));
    dispatch(updateWinnerUser({}));
    navigate("/rooms");
  };

  const handleMuted = () => {
    const reverseMute = !isMuted;
    storageItem("u_muted", { isMuted :reverseMute, localStorageField });
    dispatch(updateIsMuted(reverseMute));
  };

  return (
    <Main>
      <div className="hidden md:flex relative my-4 h-h5 rounded-b-md justify-between">
        {
          <MiniUserCard
            id="myCard"
            avatarId={userInfo.userAvatarId}
            name={userInfo.name}
          />
        }
        <img
          src={MuteIcon}
          onClick={handleMuted}
          alt="mute"
          className="cursor-pointer w-9 h-9"
        />
        <img
          src={CloseSvg}
          onClick={handleLeaveRoom}
          alt="leave"
          className="cursor-pointer w-9 h-9"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-x-4 h-full md:h-h95">
        <UserList />
        <GameGround />
      </div>
    </Main>
  );
};

export default Game;
