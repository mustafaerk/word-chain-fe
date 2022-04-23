import React from "react";
import PropTypes from "prop-types";

function WordItem({ englishWord, nativeWord }) {
  return (
    <div className="flex p-2 gap-x-2">
      <div className="flex bg-primary w-2/3 rounded-xl justify-between md:h-14 h-10 items-center">
        <span className="mx-auto text-white font-semibold text-base md:text-lg">
          {englishWord}
        </span>
        <div className="flex w-10 lg:w-12 md:w-10 h-full bg-purple px-1 text-white font-semibold rounded-xl  items-center justify-center">
          {englishWord.slice(-1).toUpperCase()}
        </div>
      </div>
      <div className="flex w-1/3 bg-primary items-center justify-center rounded-xl">
        <span className="text-white font-semibold text-base md:text-lg">{nativeWord}</span>
      </div>
    </div>
  );
}

WordItem.propTypes = {
  englishWord: PropTypes.string.isRequired,
  nativeWord: PropTypes.string.isRequired,
};
export default WordItem;
