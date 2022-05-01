import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextedEmojiList } from "constant/Emoji";

import RoomAvatar from "pages/Modules/CreateRoom/RightSide/RoomAvatar";
import {
  updateRoomField,
  createRoomInfo,
} from "redux/slices/room/createRoomSlice";

const RightSide = () => {
  const dispatch = useDispatch();
  const roomInfo = useSelector(createRoomInfo);

  const handleSelectAvatar = (val) => {
    dispatch(updateRoomField({ field: "roomAvatarId", value: val || 2}));
    console.log(val)
  };

  return Object.keys(TextedEmojiList).map((key, idx) => {
    return (
      <RoomAvatar
        onClick={handleSelectAvatar}
        key={idx}
        isSelected={roomInfo.roomAvatarId == key}
        emojiId={key}
        emojiInfo={TextedEmojiList[key]}
      />
    );
  });
};

export default RightSide;
