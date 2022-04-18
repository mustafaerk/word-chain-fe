import React, { useState } from "react";

import UserIcon from "assets/icons/userIcon.svg";
import { Input, WordItem, Select } from "components";


const Example = () => {
  const [userName, setUserName] = useState('');


  return (
    <div className="bg-darkGray w-full">
      <Input id="input1" inputName="userName" LabelIcon={UserIcon} labelText="Kullanıcı Adı" placeholder="Kullanıcı Adı" value={userName} onChange={e => setUserName(e.target.value)} />
      <Select
        data={[
          { name: '1', value: 'Wade Cooper' },
          { name: '2', value: 'Wade Cooper' },
          { name: '3', value: 'Wade Cooper' },
          { name: '4', value: 'Wade Cooper' },
          { name: '5', value: 'Wade Cooper' },
          { name: '6', value: 'sad' },
        ]}
        onChange={(e) => console.log(e)}
        LabelIcon={UserIcon}
        labelText="Kullanıcı Adı" />
      <Input id="input2" inputName="surName" placeholder="Kullanıcı Adı" value={userName} onChange={e => setUserName(e.target.value)} />
      <WordItem englishWord="Apple" nativeWord="Elma" />
      <WordItem englishWord="Word" nativeWord="Kelime" />

    </div>
  );
};

export default Example;
