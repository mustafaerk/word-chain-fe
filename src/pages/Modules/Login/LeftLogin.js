import React, { useState } from 'react'

import UserIcon from "assets/icons/userIcon.svg";
import RoomIcon from "assets/icons/room.svg";
import GameIcon from "assets/icons/game.svg";

import LanguageIcon from "assets/icons/language.svg";
import { Button, Modal, Select, Input } from "components";
import RadioGroup from "pages/Modules/Login/RadioGroup";
import PlusIcon from "assets/icons/plus.svg";
import { LANGUAGE_LIST } from "constant/LanguageList";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectAvatar = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-1/4 space-y-2'>
      <Input
        id="input2"
        inputName="userName"
        placeholder="Kullanıcı Adı"
        value={null}
        LabelIcon={UserIcon}
        labelText="Kullanıcı Adı"
        onChange={(e) => console.log(e.target.value)}
      />
      <Select
        data={LANGUAGE_LIST}
        onChange={(e) => console.log(e)}
        LabelIcon={LanguageIcon}
        labelText="Dil"
      />
      <div className='flex w-full'>
        <Button
          id="room"
          buttonIcon={RoomIcon}
          variant="secondary"
          buttonText="Odalar"
        />
        <Button
          id="button1"
          buttonIcon={GameIcon}
          variant="shadowPurple"
          buttonText="Oyna"
        />

      </div>
      <Modal
        isOpen={isOpen}
        handleModalClose={() => setIsOpen(false)}>
        <div className='h-80 overflow-y-scroll p-2 bg-darkGray '>
          <RadioGroup />
        </div>
        <div className='flex'>
          <Button
            id="okay"
            buttonIcon={PlusIcon}
            variant="purple"
            buttonClass="mx-auto mt-2 w-28"
            buttonText=""
            onClick={handleSelectAvatar}
          />
        </div>
      </Modal>
    </div>
  )
}

export default Login