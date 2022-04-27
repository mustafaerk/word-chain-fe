import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import SendIcon from "assets/icons/send.svg";
import { Button, Input } from "components";
import WordList from "pages/Modules/Game/components/WordList";

const GameGround = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  useEffect(() => {
    dispatch({ type: "LISTEN_ROOM" });
    dispatch({ type: "LISTEN_JOIN_ROOM" });
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

  return (
    <div className="bg-darkGray flex flex-col w-full h-full md:w-3/5 mx-auto rounded-md p-6 space-y-4">
      <WordList />
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
          buttonClass="absolute right-0 w-24 h-full"
          onClick={handleSendWord}
        />
      </div>
    </div>
  );
};

export default GameGround;
