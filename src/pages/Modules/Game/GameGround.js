import React from "react";

import WordList from "pages/Modules/Game/components/WordList";
import CurrentUser from "pages/Modules/Game/components/CurrentUser";

const GameGround = () => {
  return (
    <div className="bg-pureBlack h-full w-full rounded-md p-6">
      <CurrentUser />
      <WordList />
    </div>
  );
};

export default GameGround;
