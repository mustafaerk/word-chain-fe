import React from "react";

import UserList from "pages/Modules/Game/UserList";
import GameGround from "pages/Modules/Game/GameGround";
import Main from "pages/Layout/Main";

const Game = () => {
  return (
    <Main>
      <div className="flex gap-x-4 h-full flex-col sm:flex-row">
        <UserList />
        <GameGround />
      </div>
    </Main>
  );
};

export default Game;