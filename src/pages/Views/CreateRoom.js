import React from 'react'
import { useNavigate } from "react-router-dom";

import CreateRoomContent from "pages/Modules/CreateRoom/CreateRoom";
import Main from "pages/Layout/Main";
import { Button } from "components";
import backIcon from "assets/icons/back.svg";



const CreateRoom = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/rooms");
  };

  return (
    <Main>
      <div className="flex w-20">
        <Button
          borderType={false}
          buttonIcon={backIcon}
          onClick={handleGoBack}
          buttonClass="p-4 justify-start"
        />
      </div>
      <CreateRoomContent />
    </Main>
  )
}

export default CreateRoom