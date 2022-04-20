import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

let loop;

const ProgressBar = ({ id, duration ,endCallBack}) => {
  const [currentWidth, setCurrentWidth] = useState(duration);

  useEffect(() => {
    loop = setInterval(() => {
        setCurrentWidth(currentWidth => (currentWidth - 1));
        console.log(currentWidth);
    }, 1000);
  }, []);

  useEffect(() => {
    if (currentWidth == 0) {
      clearInterval(loop);
      endCallBack();
    }
  }, [currentWidth]);

  return (
    <div id={id} className="progress-bar-container h-4 bg-primary m-2 rounded-lg border-[#7B61FF] border">
      <div
        className={`progress bg-purple transition-[width] duration-[1000ms] rounded-lg h-full w-s${currentWidth}`}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  id: PropTypes.string,
  duration: PropTypes.number,
  endCallBack: PropTypes.func,
};
ProgressBar.defaultProps = {
  id: "progress-bar",
  duration: 15,
  endCallBack: () => {console.log("Time is Up!")},
};

export default ProgressBar;
