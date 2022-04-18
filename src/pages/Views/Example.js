import React, { useState } from "react";

import UserIcon from "assets/icons/userIcon.svg";
import { Input, WordItem } from "components";


const Example = () => {
  const [userName, setUserName] = useState('');


  return (
    <div className="bg-darkGray w-full">
      <Input id="input1" inputName="userName" LabelIcon={UserIcon} labelText="Kullanıcı Adı" placeholder="Kullanıcı Adı" value={userName} onChange={e => setUserName(e.target.value)} />
      <Input id="input2" inputName="surName" placeholder="Kullanıcı Adı" value={userName} onChange={e => setUserName(e.target.value)} />
      <WordItem englishWord="Apple" nativeWord="Elma" />
      <WordItem englishWord="Word" nativeWord="Kelime" />
    </div>
  );
};

export default Example;
