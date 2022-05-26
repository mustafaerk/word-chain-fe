import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import RoomPurpleIcon from "assets/icons/roomPurple.svg";
import UserIcon from "assets/icons/userIcon.svg";
import GameIcon from "assets/icons/game.svg";
import LogoImage from "assets/logo.png";

import { Button, Input, Select } from "components";
import PublicRoomSelector from "pages/Modules/CreateRoom/LeftSide/PublicRoomSelector";
import { updateRoomField } from "redux/slices/room/createRoomSlice";
import { roomIdSelector } from "redux/slices/room/roomSlice";


const LeftSide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roomId = useSelector(roomIdSelector);


  const [isDisabled, setIsDisabled] = useState(true);

  const handleCreateRoom = () => {
    setIsDisabled(true)
    dispatch({ type: "CREATE_ROOM" })
  };

  useEffect(() => {
    if (roomId) {
      navigate(`/play/${roomId}`);
    }
  }, [roomId])

  return (
    <>
      <img src={LogoImage} className="hidden md:block w-20 h-20 mx-auto" />
      <div className="md:mt-10 space-y-6">
        <span className="text-xl text-white font-semibold">Room Settings</span>
        <Input
          id="input1"
          inputName="roomname"
          LabelIcon={RoomPurpleIcon}
          labelText="Room Name"
          placeholder="Room Name(3-15 chars)"
          onChange={(e) => {
            dispatch(
              updateRoomField({ field: "roomName", value: e.target.value })
            ),
              e.target.value.length > 2 && e.target.value.length < 15
                ? setIsDisabled(false)
                : setIsDisabled(true);
          }}
        />
        <Select
          data={[
            { name: "2", value: "2" },
            { name: "3", value: "3" },
            { name: "4", value: "4" },
            { name: "5", value: "5" },
            { name: "6", value: "6" },
            { name: "7", value: "7" },
            { name: "8", value: "8" },
            { name: "9", value: "9" },
            { name: "10", value: "10" },
            { name: "11", value: "11" },
            { name: "12", value: "12" },
          ]}
          defaultValue={"6"}
          onChange={(e) =>
            dispatch(updateRoomField({ field: "roomSize", value: e.value }))
          }
          LabelIcon={UserIcon}
          labelText="Room Size"
        />
        <PublicRoomSelector />
      </div>
      <Button
        buttonClass="mt-auto"
        id="createButton"
        buttonIcon={GameIcon}
        disabled={isDisabled}
        variant="shadowPurple"
        buttonText="Create Room"
        borderType
        onClick={handleCreateRoom}
      />
    </>
  );
};

export default LeftSide;
