import React from "react";
import PropTypes from "prop-types";

import { EmojiList } from "constant/Emoji";



const InfoBox = ({ id, iconId, infoTitle, infoText }) => {
  return (
    <div id={id} className="flex gap-x-5 items-center">
      <div className="rounded-full p-2 lg:p-3 bg-purple w-1/5 "><img className="w-full h-full" src={EmojiList[iconId]} /></div>
      <div className="flex flex-col gap-1 justify-center w-4/5">
        <span className="font-bold text-md">{infoTitle}</span>
        <span className="text-xs text-lightGray text-xs">{infoText}</span>
      </div>
    </div>
  );
};
InfoBox.propTypes = {
  id: PropTypes.string.isRequired,
  iconId: PropTypes.any,
  infoText: PropTypes.string,
  infoTitle: PropTypes.string,
};
export default InfoBox;
