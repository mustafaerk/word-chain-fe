import React, { useState } from "react";

import SendIcon from "assets/icons/send.svg";
import WordList from "pages/Modules/Game/components/WordList";
import CurrentUser from "pages/Modules/Game/components/CurrentUser";
import { Button, Input } from "components";

const GameGround = () => {
  const [word, setWord] = useState("");
  return (
    <div className="bg-darkGray h-full w-full rounded-md p-6 space-y-4">
      <CurrentUser point={10} />
      <WordList />
      <div className="flex relative h-14">
        <Input
          id="input1"
          inputName="userName"
          placeholder="Write a word start by 'e'"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <Button
          id="button1"
          buttonIcon={SendIcon}
          variant="purple"
          buttonText="Send"
          buttonClass="absolute right-0 w-24 h-full"
        />
      </div>
    </div>
  );
};

export default GameGround;
