import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//import { MiniUserCard } from "components";
import CloseSvg from "assets/icons/x.svg";
import UserList from "pages/Modules/Game/UserList";
import GameGround from "pages/Modules/Game/GameGround";
import Main from "pages/Layout/Main";
import {
  clearRoom,
  roomIdSelector /* removeUserFromList */,
} from "redux/slices/room/roomSlice";
import { useLeaveRoomMutation } from "redux/slices/room/roomApi";
import { apiResHandler } from "utils/axiosBaseQuery";
//import { userInfoSelector } from "redux/slices/user/userSlice";

const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roomId = useSelector(roomIdSelector);
  //const userInfo = useSelector(userInfoSelector);

  const [leaveRoom] = useLeaveRoomMutation();

  const handleLeaveRoom = () => {
    const data = { roomId };
    apiResHandler(leaveRoom({ data }), () => {
      dispatch({ type: "LEAVE_ROOM" });
      navigate("/rooms");
      dispatch(clearRoom());
    });
  };

  return (
    <Main>
      <div className="relative mb-4">
        <img
          src={CloseSvg}
          onClick={handleLeaveRoom}
          alt="leave"
          className="cursor-pointer w-9 h-9 absolute right-20  -top-10"
        />
        {/* <MiniUserCard
          id="myCard"
          avatarId={userInfo.userAvatarId}
          name={userInfo.name}
        /> */}
      </div>

      <div className="flex gap-x-4 h-full">
        <UserList />
        <GameGround />
      </div>
    </Main>
  );
};

export default Game;
