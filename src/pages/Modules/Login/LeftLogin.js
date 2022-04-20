import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserIcon from "assets/icons/userIcon.svg";
import RoomIcon from "assets/icons/room.svg";
import GameIcon from "assets/icons/game.svg";

import LanguageIcon from "assets/icons/language.svg";
import { Button, Modal, Select, Input } from "components";
import RadioGroup from "pages/Modules/Login/RadioGroup";
import PlusIcon from "assets/icons/plus.svg";
import { LANGUAGE_LIST } from "constant/LanguageList";
import { avatarList, avatars } from "constant/Avatar";
import {
  updateUserAvatar,
  updateUserInfoField,
  userInfoSelector,
  selectUserAvatarId,
} from "redux/slices/user/userSlice";
import { useLoginMutation } from "redux/slices/user/userApi";

const Login = () => {
  const dispatch = useDispatch();
  const avatarId = useSelector(selectUserAvatarId);
  const userInfo = useSelector(userInfoSelector);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  const [login, { isLoading }] = useLoginMutation();

  const handleSelectAvatar = () => {
    dispatch(updateUserAvatar(selectedAvatar.val));
    setIsOpen(false);
  };

  const handleUserInfoChange = (value, field) => {
    dispatch(updateUserInfoField({ value, field }));
  };

  const handleLogin = async () => {
    try {
      const data = {
        ...userInfo,
      };
      await login(data);
    } catch {
      console.log("he");
    }
  };

  return (
    <div className="w-1/4 space-y-2 flex flex-col items-center">
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-cent justify-center border-2 border-purple rounded-full pb-5 w-44 h-44 cursor-pointer"
      >
        <img src={avatarList[avatarId]} className="w-36 h-36" alt="avatar" />
      </div>
      <Input
        id="input2"
        inputName="username"
        placeholder="Username"
        LabelIcon={UserIcon}
        labelText="Username"
        onChange={(e) => handleUserInfoChange(e.target.value, "name")}
      />
      <Select
        data={LANGUAGE_LIST}
        defaultValue={userInfo.language}
        onChange={(e) => handleUserInfoChange(e.value, "language")}
        LabelIcon={LanguageIcon}
        labelText="Language"
      />
      <div className="flex w-full">
        <Button
          id="room"
          buttonIcon={RoomIcon}
          variant="secondary"
          buttonText="Odalar"
          onClick={handleLogin}
          disabled={isLoading}
        />
        <Button
          id="button1"
          buttonIcon={GameIcon}
          variant="shadowPurple"
          buttonText="Oyna"
          onClick={handleLogin}
          disabled={isLoading}
        />
      </div>
      <Modal isOpen={isOpen} handleModalClose={() => setIsOpen(false)}>
        <div className="h-80 overflow-y-scroll p-2 bg-darkGray ">
          <RadioGroup
            selectedAvatar={selectedAvatar}
            setSelectedAvatar={setSelectedAvatar}
          />
        </div>
        <div className="flex">
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
  );
};

export default Login;
