import React, { useState } from "react";

import Room from "components/Room";

import { FakeRooms } from "constant/FakeRooms";

const RoomList = () => {
  const [selectedRoom, setSelectedRoom] = useState();

  const handleRoomClick = (id, roomCode) => {
    console.log(id);
    setSelectedRoom(id);
    console.log(roomCode);
  };

  return FakeRooms.map((fakeRoom, idx) => {
    return (
      <Room
        id={fakeRoom.id}
        key={idx}
        isStarted={fakeRoom.isStarted}
        roomAvatarId={fakeRoom.roomAvatarId}
        roomCode={fakeRoom.roomCode}
        roomName={fakeRoom.roomName}
        onClick={handleRoomClick}
        roomUserLength={fakeRoom.roomUserLength}
        roomUserLimit={fakeRoom.roomUserLimit}
        isSelected={selectedRoom == idx}
      />
    );
  });
};

export default RoomList;
