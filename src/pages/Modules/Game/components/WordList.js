import React, { useLayoutEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { WordItem } from "components";
import { wordListSelector } from "redux/slices/room/roomSlice";

import "./wordList.css";

const WordList = () => {
  const divRef = useRef(null);
  const wordList = useSelector(wordListSelector);

  const scrollToBottom = () => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useLayoutEffect(scrollToBottom);

  return (
    <div className="h-full overflow-y-auto">
      <TransitionGroup>
        {wordList.map((word, idx) => (
          <CSSTransition key={idx} timeout={400} classNames="item">
            <WordItem
              key={word.ownerId + idx}
              englishWord={word.word}
              nativeWord={word.word}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div ref={divRef} />
    </div>
  );
};


WordList.propTypes = {

  handleSpeak: PropTypes.func,
};

WordList.defaultProps = {
  handleEnglishWordClick: () => { }
}

export default WordList;
