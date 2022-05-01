import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import PropTypes from "prop-types";

let loop;

// eslint-disable-next-line react/display-name
const ProgressBar = forwardRef(({ id, duration, endCallBack }, ref) => {
  const [currentWidth, setCurrentWidth] = useState(duration);
  const [isStarted, setIsStarted] = useState(false);

  const handleStopProgress = () => {
    setIsStarted(false);
  };
  useImperativeHandle(ref, () => ({
    handleStartProgress() {
      handleStopProgress();
      setTimeout(() => {
        setIsStarted(true);
      }, 1000);
    },
  }));

  useEffect(() => {
    if (currentWidth == 0) {
      console.log({ currentWidth })
      clearInterval(loop);
      console.log("finish")
      endCallBack(isStarted);
    }
  }, [currentWidth])

  useEffect(() => {
    if (isStarted) {
      loop = setInterval(() => {
        setCurrentWidth((currentWidth) => currentWidth - 1);
      }, 1000);
    } else {
      setCurrentWidth(duration);
    }
    return () => clearInterval(loop);
  }, [isStarted]);

  return (
    <div
      id={id}
      className="progress-bar-container h-4 bg-primary m-2 rounded-lg border-[#7B61FF] border"
    >
      <div
        className={`progress bg-purple transition-[width] duration-[1000ms] rounded-lg h-full w-s${currentWidth}`}
      ></div>
    </div>
  );
});

ProgressBar.propTypes = {
  id: PropTypes.string,
  duration: PropTypes.number,
  endCallBack: PropTypes.func,
};
ProgressBar.defaultProps = {
  id: "progress-bar",
  duration: 15,
  endCallBack: () => {
    console.log("Time is Up!");
  },
};

export default ProgressBar;
