import React from "react";

import { Row, Text } from "components";
import UserPanel from "./UserPanel/UserPanel";
import HeaderPanel from "./HeaderPanel/HeaderPanel";
import Flag from "./Flag/Flag";
import { getString } from "localization/config";

import "./Header.scss";

const Header = () => {
  return (
    <Row className="header__wrapper">
      <Flag />
      <Text type="lg" weight="bold">
        {getString("dashboard")}
      </Text>
      <Row>
        <HeaderPanel />
        <UserPanel />
      </Row>
    </Row>
  );
};

export default Header;
