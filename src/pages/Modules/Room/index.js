import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { EmojiList } from "constant/Emoji";
import started from "assets/icons/started.svg";
import starting from "assets/icons/starting.svg";

function Room({
  id,
  roomAvatarId,
  roomName,
  roomCode,
  roomUserLength,
  roomUserLimit,
  isStarted,
  onClick,
}) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (isStarted || !roomUserLimit > roomUserLength) setDisabled(true);
  });

  const handleAvatarColor = () => {
    if (disabled) {
      return "bg-primary";
    }
    return "bg-purple";
  };

  /*const handleRoomColor = () => {
    if (disabled) {
      return "bg-primary";
    }
    return "bg-purple";
  };*/

  const handleTextColor = () => {
    if (isStarted || !roomUserLimit > roomUserLength) {
      return "text-lightGray";
    }
    return "text-white";
  };
  const handleCursor = () => {
    if (!isStarted && roomUserLimit > roomUserLength) {
      return "cursor-pointer";
    }
    return "cursor-not-allowed";
  };
  const handleOnClick = () => {
    if (isStarted || !roomUserLimit > roomUserLength) {
      return;
    } else {
      onClick();
    }
  };
  const handleStartImage = () => {
    if (isStarted) {
      return started;
    }
    return starting;
  };
  return ( 
    <div
      id={id}
      className={`my-11 m-auto pt-10 pb-4 relative flex float-left flex-col ${handleCursor()} bg-primary w-full rounded-md`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      <div className={`absolute room-card-avatar -top-14 rounded-full ${handleAvatarColor()} w-fit p-3 border-8 border-[#373e51]`}>
        <img width="50" src={EmojiList[roomAvatarId]} />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <div className={`font-bold text-sm ${handleTextColor()}`}>
          {roomName}
        </div>
        <div className={`${handleTextColor()} text-xs`}>{roomCode}</div>
        <div className={`${handleTextColor()} text-xs flex gap-x-4`}>
          <div className="">
            {roomUserLength}/{roomUserLimit}
          </div>
          <div className="flex gap-x-1">
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
  roomCode: PropTypes.string.isRequired,
  roomUserLength: PropTypes.number.isRequired,
  roomUserLimit: PropTypes.number.isRequired,
  isStarted: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
Room.defaultProps = {
  onClick: () => {},
};
export default Room;