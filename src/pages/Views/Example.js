import React, { useState } from "react";

import UserIcon from "assets/icons/userIcon.svg";
import roomIcon from "assets/icons/room.svg";
import {
  Input,
  WordItem,
  Select,
  Button,
  Modal,
  UserCard,
  ProgressBar,
} from "components";

const Example = () => {
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-darkGray w-1/2 h-screen m-auto">
      <div className="w-96 m-auto">
        <UserCard
          id="userCard"
          name="CigiBugule"
          avatarId={9}
          isActive={true}
        />
        <UserCard
          id="userCard2"
          name="CigiBugule"
          avatarId={3}
          isActive={false}
        />
      </div>
      <Input
        id="input1"
        inputName="userName"
        LabelIcon={UserIcon}
        labelText="Kullanıcı Adı"
        placeholder="Kullanıcı Adı"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Select
        data={[
          { name: "1", value: "Wade Cooper" },
          { name: "2", value: "Wade Cooper" },
          { name: "3", value: "Wade Cooper" },
          { name: "4", value: "Wade Cooper" },
          { name: "5", value: "Wade Cooper" },
          { name: "6", value: "sad" },
        ]}
        onChange={(e) => console.log(e)}
        LabelIcon={UserIcon}
        labelText="Kullanıcı Adı"
      />
      <Input
        id="input2"
        inputName="surName"
        placeholder="Kullanıcı Adı"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <WordItem englishWord="Apple" nativeWord="Elma" />
      <WordItem englishWord="Word" nativeWord="Kelime" />
      <Button
        id="button1"
        buttonIcon={roomIcon}
        variant="shadowPurple"
        buttonText="Katıl"
      />
      <Button
        id="button2"
        buttonIcon={roomIcon}
        variant="secondary"
        buttonText="Katıl"
      />
      <Button
        id="button3"
        buttonIcon={roomIcon}
        variant="primary"
        buttonText="Katıl"
      />
      <Button
        id="button4"
        buttonIcon={roomIcon}
        variant="shadowPurple"
        buttonText="Katıl"
        borderType
      />

      <Modal
        ModalTitle="Are you sure?"
        isOpen={isOpen}
        handleModalClose={() => setIsOpen(false)}
      >
        <span> Hello</span>
      </Modal>

      <ProgressBar duration={15}></ProgressBar>
    </div>
  );
};

export default Example;
