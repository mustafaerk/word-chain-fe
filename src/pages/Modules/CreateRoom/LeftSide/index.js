import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import RoomPurpleIcon from "assets/icons/roomPurple.svg";
import UserIcon from "assets/icons/userIcon.svg";
import GameIcon from "assets/icons/game.svg";
import LogoImage from "assets/logo.png";

import { Button, Input, Select } from "components";
import PublicRoomSelector from "pages/Modules/CreateRoom/LeftSide/PublicRoomSelector";
import {
  updateRoomField,
  createRoomInfo,
} from "redux/slices/room/createRoomSlice";
import { useCreateRoomMutation } from "redux/slices/room/roomApi";
import { updateRoom } from "redux/slices/room/roomSlice";
import { apiResHandler } from "utils/axiosBaseQuery";

const LeftSide = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roomInfo = useSelector(createRoomInfo);

  const [createRoom, { isLoading }] = useCreateRoomMutation();
  const [isDisabled, setIsDisabled] = useState(true);

  const handleCreateRoom = () => {
    const data = { ...roomInfo };
    apiResHandler(createRoom({ data }), (res) => {
      const { room } = res;
      dispatch(updateRoom(room));
      navigate(`/play/${room.roomId}`);
    });
  };

  return (
    <>
      <img src={LogoImage} className="w-20 h-20 mx-auto" />
      <div className="mt-10 space-y-6">
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
        disabled={isLoading || isDisabled}
        variant="shadowPurple"
        buttonText="Create Room"
        onClick={handleCreateRoom}
      />
    </>
  );
};

export default LeftSide;
