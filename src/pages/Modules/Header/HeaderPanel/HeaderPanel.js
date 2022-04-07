import React from "react";

import BellIcon from "assets/icons/bell.svg";
import ExpandIcon from "assets/icons/expand.svg";

const HeaderPanel = () => {
  return (
    <div>
      <img src={BellIcon} alt="Notifications" />
      <img src={ExpandIcon} alt="Expand" />
    </div>
  );
};

export default HeaderPanel;
