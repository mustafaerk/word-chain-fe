import React from "react";
import PropTypes from "prop-types";

import InfoBox from "./InfoBox";

function HowToPlay({ id }) {
  return (
    <div
      id={id}
      className={`flex flex-col text-white space-y-10 shadow-3xl w-full rounded-lg m-1 h-12}`}
    >
      <h1 className="font-bold text-lg text-center">How To Play?</h1>
      <InfoBox
        id="one"
        iconId="2"
        infoTitle="Select Language!"
        infoText="Select the language you want to see the meaning of English words in
            the game."
      />
      <InfoBox
        id="two"
        iconId="3"
        infoTitle="Follow the last word!"
        infoText="When it is your turn, you are expected to write a word that starts
        with the last letter of the last word."
      />
      <InfoBox
        id="three"
        iconId="4"
        infoTitle="Attention to the time!"
        infoText="It will be 15 seconds while it is your turn, hurry up."
      />
    </div>
  );
}

HowToPlay.propTypes = {
  id: PropTypes.string.isRequired,
};

export default HowToPlay;
