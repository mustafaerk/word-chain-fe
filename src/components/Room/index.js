import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { EmojiList } from "constant/Emoji";
import started from "assets/icons/started.svg";
import starting from "assets/icons/starting.svg";
import startingWhite from "assets/icons/startingWhite.svg";
import grayHead from "assets/icons/grayHead.svg";
import whiteHead from "assets/icons/whiteHead.svg";
import purpleHead from "assets/icons/purpleHead.svg";

import { updateRoomId, selectedRoomIdSelector } from "redux/slices/room/createRoomSlice";
function Room({
  id,
  roomAvatarId,
  roomName,
  roomUserLength,
  roomUserLimit,
  isStarted,
}) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const roomId = useSelector(selectedRoomIdSelector);

  const isSelected = id == roomId;

  const handleSelectRoom = () => {
    if (roomId == id) {
      dispatch(updateRoomId(""))
    }
    else {
      dispatch(updateRoomId(id))
    }
  }
  useEffect(() => {
    if (roomUserLimit == roomUserLength) setDisabled(true);
  }, []);

  const handleAvatarColor = () => {
    if (disabled) {
      return "bg-primary";
    }
    return "bg-purple";
  };

  const handleRoomColor = () => {
    if (!isSelected) {
      return "bg-primary";
    }
    return "bg-purple";
  };

  const handleTextColor = () => {
    if (disabled) {
      return "text-lightGray";
    }
    return "text-white";
  };
  const handleCursor = () => {
    if (!disabled) {
      return "cursor-pointer";
    }
    return "cursor-not-allowed";
  };
  const handleStartImage = () => {
    if (isStarted) {
      return started;
    } else if (isSelected) {
      return startingWhite;
    } else {
      return starting;
    }
  };
  const handleHeadImage = () => {
    if (disabled) {
      return grayHead;
    } else if (isSelected) {
      return whiteHead;
    } else {
      return purpleHead;
    }
  };
  return (
    <div
      id={id}
      className={`pt-10 pb-6 relative flex float-left flex-col ${handleCursor()} ${handleRoomColor()} w-full rounded-md`}
      onClick={disabled ? () => { } : () => handleSelectRoom()}
      disabled={disabled}
    >
      <div
        className={`absolute room-card-avatar -top-14 rounded-full ${handleAvatarColor()} w-fit p-3 border-8 border-[#373e51]`}
      >
        <img width="50" src={EmojiList[roomAvatarId]} />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div className={`font-bold text-sm ${handleTextColor()}`}>
          {roomName}
        </div>
        <div className={`${handleTextColor()} text-xs flex space-x-4`}>
          <div className="flex space-x-1">
            <img width={14} src={handleHeadImage()} />
            <span className="">
              {roomUserLength}/{roomUserLimit}
            </span>
          </div>
          <div className="flex space-x-1">
            <img width={14} src={handleStartImage()} />
            <span className="">{isStarted ? "Started" : "Starting"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Room.propTypes = {
  id: PropTypes.string.isRequired,
  roomAvatarId: PropTypes.number.isRequired,
  roomName: PropTypes.string.isRequired,
  roomUserLength: PropTypes.number.isRequired,
  roomUserLimit: PropTypes.number.isRequired,
  isStarted: PropTypes.bool.isRequired,
};

export default Room;
