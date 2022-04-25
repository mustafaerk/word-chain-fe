import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Main from "pages/Layout/Main";
import Room from "pages/Modules/Room";
import { Button } from "components";

import doorIcon from "assets/icons/door.svg";
import gameIcon from "assets/icons/game.svg";
import backIcon from "assets/icons/back.svg";
import { RoomList } from "constant/Rooms";
import RadioGroup from "pages/Modules/Room/RoomRadioGroup";

const Login = () => {
  const navigate = useNavigate();

  const [selectedRoom, setSelectedRoom] = useState(RoomList[0]);

  const handleGoBack = () => {
    navigate(`/`);
  };
  return (
    <Main>
      <div className="flex justify-between mb-2">
        <div className="">
          <Button
            borderType={false}
            buttonIcon={backIcon}
            onClick={handleGoBack}
          />
        </div>
        <div className="flex justify-end">
          <Button
            borderType
            buttonIcon={gameIcon}
            buttonText="Play"
            buttonClass="w-40"
            variant="shadowPurple"
          />
          <Button
            borderType
            buttonIcon={doorIcon}
            buttonText="New Room"
            buttonClass="w-40"
            variant="shadowGreen"
          />
        </div>
      </div>
      <div className="bg-darkGray rounded-lg p-5 h-5/6 overflow-y-scroll grid gap-x-8 gap-y-4 grid-cols-3">
        <Room
          id="1"
          isStarted={false}
          roomAvatarId={1}
          roomCode="#343434"
          roomUserLength={5}
          roomUserLimit={8}
          roomName="Cigi's Room"
        />
        <Room
          id="2"
          isStarted
          roomAvatarId={2}
          roomCode="#333"
          roomUserLength={8}
          roomUserLimit={8}
          roomName="Musti's Room"
        />
        <Room
          id="3"
          isStarted
          roomAvatarId={3}
          roomCode="#333"
          roomUserLength={8}
          roomUserLimit={8}
          roomName="CHATTING Room :)"
        />
        <Room
          id="4"
          isStarted
          roomAvatarId={4}
          roomCode="#333"
          roomUserLength={3}
          roomUserLimit={8}
          roomName="NEW ROOM"
        />
        <Room
          id="5"
          isStarted={false}
          roomAvatarId={5}
          roomCode="#333"
          roomUserLength={4}
          roomUserLimit={8}
          roomName="COME COME"
        />
        <Room
          id="6"
          isStarted={false}
          roomAvatarId={6}
          roomCode="#343434"
          roomUserLength={5}
          roomUserLimit={8}
          roomName="Cigi's Room"
        />
        <Room
          id="7"
          isStarted
          roomAvatarId={7}
          roomCode="#333"
          roomUserLength={8}
          roomUserLimit={8}
          roomName="Musti's Room"
        />
        <Room
          id="8"
          isStarted
          roomAvatarId={8}
          roomCode="#333"
          roomUserLength={8}
          roomUserLimit={8}
          roomName="CHATTING Room :)"
        />
        <Room
          id="9"
          isStarted
          roomAvatarId={9}
          roomCode="#333"
          roomUserLength={3}
          roomUserLimit={8}
          roomName="NEW ROOM"
        />
        <Room
          id="10"
          isStarted={false}
          roomAvatarId={10}
          roomCode="#333"
          roomUserLength={4}
          roomUserLimit={8}
          roomName="COME COME"
        />
      </div>
      <RadioGroup
        selectedAvatar={selectedRoom}
        setSelectedAvatar={setSelectedRoom}
      />
    </Main>
  );
};

export default Login;
