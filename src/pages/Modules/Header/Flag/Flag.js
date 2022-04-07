import React from "react";
import { Menu, Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";

import TurkeyFlag from "assets/icons/flags/Turkey.svg";
import ArabicFlag from "assets/icons/flags/arabia.svg";
import EnglandFlag from "assets/icons/flags/england.svg";
import { changelocalization } from "redux/slices/app/localizationSlice";

const Flag = () => {
  const dispatch = useDispatch();

  const handleCurrentFlag = () => {
    const crrLang = useSelector((state) => state.localization.lang);

    switch (crrLang) {
      case "en":
        return EnglandFlag;
      case "tr":
        return TurkeyFlag;
      case "ar":
        return ArabicFlag;

      default:
        return EnglandFlag;
    }
  };

  const handleChangeFlag = (key) => {
    dispatch(changelocalization(key));
  };

  const menu = (
    <Menu
      onClick={(e) => {
        e.stopPropagation();
        handleChangeFlag(e.key);
      }}
    >
      <Menu.Item key="en">
        <img src={EnglandFlag} alt="english" width={40} />
      </Menu.Item>
      <Menu.Item key="ar">
        <img src={ArabicFlag} alt="arabic" width={40} />
      </Menu.Item>
      <Menu.Item key="tr">
        <img src={TurkeyFlag} alt="turkish" width={40} />
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <img src={handleCurrentFlag()} alt="english" width={40} />
      </Dropdown>
    </div>
  );
};

export default Flag;
