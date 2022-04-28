import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import backIcon from "assets/icons/back.svg";
import doorIcon from "assets/icons/door.svg";
import gameIcon from "assets/icons/game.svg";
import { Button } from "components";

const UpperArea = ({ joinRoom, isLoadingJoin }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
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
            onClick={joinRoom}
            disabled={isLoadingJoin}
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

UpperArea.propTypes = {
  isLoadingJoin: PropTypes.bool.isRequired,
  joinRoom: PropTypes.func.isRequired,
};

export default UpperArea;
