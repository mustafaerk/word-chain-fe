import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import gameIcon from "assets/icons/game.svg";
import { Button } from "components";
import RoomList from "pages/Modules/Room/RoomList";
import Main from "pages/Layout/Main";
import UpperArea from "pages/Modules/Room/UpperArea";
import { useJoinRoomMutation } from "redux/slices/user/userApi";
import { updateRoom } from "redux/slices/room/roomSlice";
import { updateRoomId } from "redux/slices/room/createRoomSlice";
import { selectedRoomIdSelector } from "redux/slices/room/createRoomSlice";
import { apiResHandler } from "utils/axiosBaseQuery";

const Rooms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomId = useSelector(selectedRoomIdSelector);

  const [joinRoom, { isLoading: i1 }] = useJoinRoomMutation();

  const handleJoinRoom = () => {
    const data = { roomId }

    apiResHandler(joinRoom({ data }), (res) => {
      console.log(res)
      const { room } = res;
      dispatch(updateRoom(room));
      dispatch({ type: "JOIN_ROOM" });
      dispatch(updateRoomId(""))
      navigate(`/play/${room.roomId}`);
    });
  };

  return (
    <Main>
      <UpperArea joinRoom={handleJoinRoom} isLoadingJoin={i1} />
      <RoomList />
      <div className="block sm:hidden absolute bottom-0 left-0 w-full pb-4">
        <Button
          borderType
          buttonIcon={gameIcon}
          buttonText="Play"
          buttonClass="w-11/12 m-auto"
          variant="shadowPurple"
          disabled={i1}
          onClick={handleJoinRoom}
        />
      </div>
    </Main>
  );
};

export default Rooms;
