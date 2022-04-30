import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { TranslateText } from "localization/translate";
import { userInfoSelector } from "redux/slices/user/userSlice";

function WordItem({ englishWord, nativeWord }) {
  const userInfo = useSelector(userInfoSelector);

  return (
    <div className="flex p-2 gap-x-6">
      <div className="flex bg-primary w-1/2 rounded-xl justify-between md:h-12 h-8 items-center">
        <span className="mx-auto text-white font-semibold text-sm md:text-base lg:text-lg">
          {englishWord}
        </span>
        <div className="flex w-10 lg:w-12 md:w-10 h-full bg-purple px-1 text-white font-semibold rounded-xl  items-center justify-center">
          {englishWord.slice(-1).toUpperCase()}
        </div>
      </div>
      <div className="flex w-1/2 bg-primary items-center justify-center rounded-xl">
        <span className="text-white font-semibold text-sm md:text-base lg:text-lg">
          {TranslateText(nativeWord, userInfo.language)}
        </span>
      </div>
    </div>
  );
}

WordItem.propTypes = {
  englishWord: PropTypes.string.isRequired,
  nativeWord: PropTypes.string.isRequired,
};
export default WordItem;
