import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import gameIcon from "assets/icons/game.svg";
import { Button } from "components";
import RoomList from "pages/Modules/Room/RoomList";
import Main from "pages/Layout/Main";
import UpperArea from "pages/Modules/Room/UpperArea";
import { selectedRoomIdSelector } from "redux/slices/room/createRoomSlice";

const Rooms = () => {
  const navigate = useNavigate();
  const roomId = useSelector(selectedRoomIdSelector);

  const handleJoinRoom = () => {
    navigate(`/play/${roomId}`);
  };

  return (
    <Main>
      <UpperArea joinRoom={handleJoinRoom} />
      <RoomList />
      <div className="block sm:hidden w-full my-1">
        <Button
          borderType
          buttonIcon={gameIcon}
          buttonText="Play"
          buttonClass="w-11/12 m-auto"
          variant={roomId == "" ? "shadowPrimary" : "shadowPurple"}
          disabled={roomId == ""}
          onClick={handleJoinRoom}
        />
      </div>
    </Main>
  );
};

export default Rooms;
