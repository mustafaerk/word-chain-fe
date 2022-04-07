import React from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  PaperClipOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

export const sideBarList = [
  { label: "home", route: "/", icon: <AppstoreOutlined /> },
  { label: "reports", route: "/example", icon: <PaperClipOutlined /> },
  { label: "transformation", route: "/22", icon: <ShoppingCartOutlined /> },
  { label: "setting", route: "/example3", icon: <SettingOutlined /> },
];
