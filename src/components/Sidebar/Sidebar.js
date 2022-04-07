import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";

import { sideBarList } from "constant/Sidebar";
import { getString } from "localization/config";

import "./Sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();
  const [collepseMenu] = useState(false);

  const handleClick = (e) => {
    navigate(`/${e.key}`);
  };

  const renderMenuItems = sideBarList.map((item) => (
    <Menu.Item icon={item.icon} key={item.label}>
      {getString(item.label)}
    </Menu.Item>
  ));

  return (
    <Menu
      inlineCollapsed={collepseMenu}
      className="menu__wrapper"
      onClick={handleClick}
      mode="inline"
    >
      {renderMenuItems}
    </Menu>
  );
};

export default Sidebar;
