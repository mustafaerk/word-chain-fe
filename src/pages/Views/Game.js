import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { MiniUserCard } from "components";
import CloseSvg from "assets/icons/x.svg";
import UserList from "pages/Modules/Game/UserList";
import GameGround from "pages/Modules/Game/Game";
import Main from "pages/Layout/Main";
import { clearRoom, updateRoomFinishStatus, updateWinnerUser } from "redux/slices/room/roomSlice";

import { userInfoSelector } from "redux/slices/user/userSlice";

const Game = () => {
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
    <Main>
      <div className="relative mb-4 h-16 sm:h-auto bg-darkGray rounded-b-md">
        <img
          src={CloseSvg}
          onClick={handleLeaveRoom}
          alt="leave"
          className="cursor-pointer w-9 h-9 absolute right-1 top-1 sm:right-20 sm:-top-10"
        />
        {<MiniUserCard
          id="myCard"
          avatarId={userInfo.userAvatarId}
          name={userInfo.name}
        />}
      </div>

      <div className="flex flex-col sm:flex-row gap-x-4 h-full">
        <UserList />
        <GameGround />
      </div>
    </Main>
  );
};

export default Game;
