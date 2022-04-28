import React from "react";
import { useNavigate } from "react-router-dom";

import backIcon from "assets/icons/back.svg";
import doorIcon from "assets/icons/door.svg";
import gameIcon from "assets/icons/game.svg";
import { Button } from "components";

const UpperArea = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleCreateRoomRoute = () => {
    navigate("/createroom");
  };
  return (
    <div className="flex justify-between mb-2">
      <div className="">
        <Button
          borderType={false}
          buttonIcon={backIcon}
          onClick={handleGoBack}
        />
      </div>
      <div className="flex justify-end">
        <div className="hidden sm:block">
          <Button
            borderType
            buttonIcon={gameIcon}
            buttonText="Play"
            buttonClass="w-40"
            variant="shadowPurple"
          />
        </div>
        <Button
          borderType
          buttonIcon={doorIcon}
          buttonText="New Room"
          buttonClass="w-40"
          variant="shadowGreen"
          onClick={handleCreateRoomRoute}
        />
      </div>
    </div>
  );
};

export default UpperArea;
