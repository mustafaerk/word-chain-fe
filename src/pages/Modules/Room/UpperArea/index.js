import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import backIcon from "assets/icons/back.svg";
import doorIcon from "assets/icons/door.svg";
import refleshIcon from "assets/icons/reflesh.svg";
import gameIcon from "assets/icons/game.svg";
import { Button } from "components";
import { selectedRoomIdSelector } from "redux/slices/room/createRoomSlice";
import { updateIsRefleshed } from "redux/slices/user/userSlice";

const UpperArea = ({ joinRoom }) => {
  const navigate = useNavigate();
  const roomId = useSelector(selectedRoomIdSelector);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleCreateRoomRoute = () => {
    navigate("/createroom");
  };

  const handleRestartRoomList = () => {
    dispatch(updateIsRefleshed(true));
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
        <Button
          borderType
          buttonIcon={refleshIcon}
          buttonText="Reflesh"
          buttonClass="w-24 md:w-40"
          variant="shadowGreen"
          onClick={handleRestartRoomList}
        />
        <Button
          borderType
          buttonIcon={doorIcon}
          buttonText="New Room"
          buttonClass="w-24 md:w-40"
          variant="shadowGreen"
          onClick={handleCreateRoomRoute}
        />
        <div className="hidden sm:block">
          <Button
            borderType
            buttonIcon={gameIcon}
            buttonText="Play"
            buttonClass="w-40"
            variant={roomId == "" ? "shadowPrimary" : "shadowPurple"}
            disabled={roomId == ""}
            onClick={joinRoom}
          />
        </div>
      </div>
    </div>
  );
};

UpperArea.propTypes = {
  joinRoom: PropTypes.func.isRequired,
};

export default UpperArea;
