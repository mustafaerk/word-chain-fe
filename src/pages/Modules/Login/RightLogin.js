import React from "react";

import HowToPlay from "./HowToPlay";
import Logo from "assets/logo.png";

const RightLogin = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3   px-4  hidden md:block">
      <img width={100} className="mx-auto mb-2" src={Logo} />
      <br />
      <HowToPlay id="howtoplay" />
    </div>
  );
};
export default RightLogin;