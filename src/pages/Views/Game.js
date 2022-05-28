import React from "react";


import UserList from "pages/Modules/Game/UserList";
import UpperArea from "pages/Modules/Game/UpperArea";
import GameGround from "pages/Modules/Game/Game";
import Main from "pages/Layout/Main";
import Settings from "pages/Modules/Game/Settings";


const Game = () => {

  return (
    <Main>
      <Settings/>
      <UpperArea/>
      <div className="flex flex-col md:space-x-4 sm:flex-row h-full md:h-h95">
        <UserList />
        <GameGround />
      </div>
    </Main>
  );
};

export default Game;
