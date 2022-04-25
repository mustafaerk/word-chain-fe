import React, { useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import PropTypes from "prop-types";

import { RoomList } from "constant/Rooms";
import Room from "pages/Modules/Room";

export default function RoomRadioGroup({ selectedRoom, setSelectedRoom }) {
  useEffect(() => {
      console.log(RoomList)
  }, []);
  
  return (
    <RadioGroup
      className="grid sm:grid-cols-4 grid-cols-3 sm:grid-rows-4 grid-rows-6 gap-1"
      value={selectedRoom}
      onChange={setSelectedRoom}
    >
      {RoomList.map((room) => (
        <RadioGroup.Option
          key={room.id}
          value={room.roomCode}
          className={({ checked }) =>
            `${
              checked
                ? "bg-purple bg-opacity-75 text-white border-white border"
                : "bg-white"
            } md:w-32 md:h-32  h-28 w-28 relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
          }
        >
          {() => (
            <img
              className="w-full h-full border-darkGray bg-darkGray rounded-full border"
              src={room.icon}
              alt=""
            />
          )}
          
            <Room
              id={room.id}
              isStarted={room.isStarted}
              roomAvatarId={room.roomAvatarId}
              roomCode={room.roomCode}
              roomUserLength={room.roomUserLength}
              roomUserLimit={room.roomUserLimit}
              roomName={room.roomName}
            />
          
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
}

RoomRadioGroup.propTypes = {
  selectedRoom: PropTypes.any,
  setSelectedRoom: PropTypes.func,
};
