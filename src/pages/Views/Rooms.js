import React from "react";

import Main from "pages/Layout/Main";
import MobileRoomList from "../Modules/Room/MobileRoomList";
import RoomList from "../Modules/Room/RoomList";
import UpperArea from "pages/Modules/Room/UpperArea";

import { Button } from "components";

import gameIcon from "assets/icons/game.svg";

const Rooms = () => {
  return (
    <Main>
      <UpperArea />
      <div className="hidden sm:grid bg-darkGray rounded-lg p-5 h-5/6 overflow-y-scroll gap-x-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <RoomList />
      </div>
      <div className="w-full flex flex-col sm:hidden bg-darkGray rounded-lg p-5 h-5/6 overflow-x-hidden overflow-y-scroll gap-y-2">
        <MobileRoomList />
      </div>
      <div className="block sm:hidden absolute bottom-0 left-0 w-full pb-4">
        <Button
          borderType
          buttonIcon={gameIcon}
          buttonText="Play"
          buttonClass="w-11/12 m-auto"
          variant="shadowPurple"
        />
      </div>
    </Main>
  );
};

export default Rooms;
