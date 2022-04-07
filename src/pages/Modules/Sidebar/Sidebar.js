import React from "react";

import LogoIcon from "assets/icons/logo.svg";
import { Sidebar as SidebarContent } from "components";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: 250 }}>
      <div className="logo_wrapper">
        <img src={LogoIcon} width="100%" height={80} alt="logo" />
      </div>
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
