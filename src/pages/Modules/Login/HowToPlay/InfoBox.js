import React from "react";
import PropTypes from "prop-types";

import { EmojiList } from "constant/Emoji";



const InfoBox = ({id, iconId, infoTitle, infoText}) => {
  return (
    <div id={id} className="flex gap-x-5 items-center">
      <div className="h-fit w-fit rounded-full p-5 bg-purple"><img width="35" src={EmojiList[iconId]} /></div>
      <div className="flex flex-col gap-1 justify-center">
        <span className="font-bold">{infoTitle}</span>
        <span>{infoText}</span>
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
