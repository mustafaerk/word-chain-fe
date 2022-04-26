import React from "react";

import HowToPlay from "./HowToPlay";
import { EmojiList } from "constant/Emoji";

const RightLogin = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3   px-4  hidden md:block">
      <img width={100} className="m-auto" src={EmojiList[17]} />
      <HowToPlay id="howtoplay" />
    </div>
  );
};
export default RightLogin;