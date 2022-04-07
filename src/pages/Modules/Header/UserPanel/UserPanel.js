import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./UserPanel.scss";

const UserPanel = () => {
  return (
    <div className="panel__wrapper">
      <div className="panel__info">
        <span className="panel__username">Batuhuan Demir</span>
        <span className="panel__role">ADMIN</span>
      </div>
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
    </div>
  );
};

export default UserPanel;
