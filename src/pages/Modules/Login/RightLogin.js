import React from "react";

import HowToPlay from "./HowToPlay";
import { EmojiList } from "constant/Emoji";

const RightLogin = () => {
  return (
    <div className="border-l-2">
       <img width={100} className="m-auto" src={EmojiList[17]}/>
      <HowToPlay id="howtoplay"/>
    </div>
  );
};
export default RightLogin;
