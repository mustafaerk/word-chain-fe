import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserIcon from "assets/icons/userIcon.svg";
import RoomIcon from "assets/icons/room.svg";
import GameIcon from "assets/icons/game.svg";
import EditIcon from "assets/icons/edit.svg";

import LanguageIcon from "assets/icons/language.svg";
import PlusIcon from "assets/icons/plus.svg";
import { Button, Modal, Select, Input } from "components";
import { LANGUAGE_LIST } from "constant/LanguageList";
import { avatarList, avatars } from "constant/Avatar";
import { apiResHandler } from "utils/axiosBaseQuery";
import { storageItem } from "utils/localstorage";
import RadioGroup from "pages/Modules/Login/RadioGroup";
import {
  updateUserAvatar,
  updateUserInfoField,
  userInfoSelector,
  selectUserAvatarId,
} from "redux/slices/user/userSlice";
import { useLoginMutation } from "redux/slices/user/userApi";
import { updateToken } from "redux/slices/app/appSlice";
import { roomIdSelector } from "redux/slices/room/roomSlice";

const LeftLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const avatarId = useSelector(selectUserAvatarId);
  const userInfo = useSelector(userInfoSelector);
  const roomId = useSelector(roomIdSelector);

  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);

  const [login, { isLoading }] = useLoginMutation();
  const localStorageField = "user";

  useEffect(() => {
    if (roomId) {
      navigate(`/play/${roomId}`);
    }
  }, [roomId]);

  useEffect(() => {
    if (userInfo.language && userInfo.name) {
      if (userInfo.name.length > 2 && userInfo.name.length < 16) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [userInfo]);

  const handleSelectAvatar = () => {
    dispatch(updateUserAvatar(selectedAvatar.val));
    setIsOpen(false);
  };

  const handleUserInfoChange = (value, field) => {
    dispatch(updateUserInfoField({ value, field }));
  };

  const handleLogin = (callback) => {
    try {
      storageItem("u_user", { userInfo, localStorageField });
      const data = {
        ...userInfo,
      };
      apiResHandler(login({ data }), (res) => {
        storageItem("u_tkn", res?.token);
        dispatch(updateToken(res?.token));
        callback();
      });
    } catch {
      // TODO: PUT ERROR MESSAGE HERE.
      navigate("/");
    }
  };

  const handlePlay = () => {
    handleLogin(() => dispatch({ type: "QUICK_JOIN" }));
  };

  const handleGoToRoomList = () => {
    handleLogin(() => navigate(`/rooms`));
  };

  return (
    <div className="w-full sm:w-1/2  md:w-1/3 space-y-2 flex flex-col items-center mx-4 sm:mx-0">
      <div
        onClick={() => setIsOpen(true)}
        className="relative flex items-cent justify-center border-2 border-purple rounded-full w-40 h-40 cursor-pointer items-center"
      >
        <img src={avatarList[avatarId]} className="w-36 h-36" alt="avatar" />
        <img src={EditIcon} alt="" className="absolute top-0 right-0" />
      </div>
      <Input
        id="u_name"
        inputName="u_name"
        placeholder="Username(3-15 chars)"
        LabelIcon={UserIcon}
        labelText="Username"
        onChange={(e) => handleUserInfoChange(e.target.value, "name")}
        value={userInfo.name ? userInfo.name : ""}
      />
      <Select
        data={LANGUAGE_LIST}
        defaultValue={userInfo.language}
        onChange={(e) => handleUserInfoChange(e.value, "language")}
        LabelIcon={LanguageIcon}
        labelText="Language"
        value={userInfo.language ? userInfo.language : ""}
      />
      <div className="flex w-full gap-x-4">
        <Button
          id="room"
          buttonIcon={RoomIcon}
          variant="shadowSecondary"
          buttonText="Rooms"
          onClick={handleGoToRoomList}
          disabled={isLoading || isDisabled}
          borderType
        />
        <Button
          id="button1"
          buttonIcon={GameIcon}
          variant="shadowPurple"
          buttonText="Play"
          onClick={handlePlay}
          disabled={isLoading || isDisabled}
          borderType
        />
      </div>
      <Modal
        ModalClass="bg-white"
        isOpen={isOpen}
        handleModalClose={() => setIsOpen(false)}
      >
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

export default LeftLogin;
