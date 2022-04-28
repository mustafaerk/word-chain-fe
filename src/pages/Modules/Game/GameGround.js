import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SendIcon from "assets/icons/send.svg";
import { Button, Input, ProgressBar } from "components";
import WordList from "pages/Modules/Game/components/WordList";
import { useLeaveRoomMutation } from "redux/slices/room/roomApi";
import { roomIdSelector } from "redux/slices/room/roomSlice";
import { apiResHandler } from "utils/axiosBaseQuery";

const GameGround = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [word, setWord] = useState("");
  const roomId = useSelector(roomIdSelector);

  const [leaveRoom, { isLoading: i1 }] = useLeaveRoomMutation();

  useEffect(() => {
    dispatch({ type: "LISTEN_ROOM" });
  }, []);

  const handleSendWord = () => {
    dispatch({ type: "NEW_MESSAGE", payload: word });
    setWord("");
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSendWord();
    }
  };

  const handleLeaveRoom = () => {
    const data = { roomId };
    apiResHandler(leaveRoom({ data }), () => {
      dispatch({ type: "LEAVE_ROOM" });
      navigate(`/rooms`);
    });
  };

  return (
    <div className="bg-darkGray flex flex-col w-full h-full md:w-3/5 mx-auto rounded-md p-6 space-y-4">
      <WordList />
      <ProgressBar />
      <div className="flex relative h-14">
        <Input
          id="input1"
          inputName="userName"
          placeholder="Write a word start by 'e'"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleEnterPress}
        />
        <Button
          id="button1"
          buttonIcon={SendIcon}
          variant="purple"
          buttonText="Send"
          disabled={i1}
          buttonClass="absolute right-0 w-24 h-full"
          onClick={handleLeaveRoom}
        />
      </div>
    </div>
  );
};

export default GameGround;
