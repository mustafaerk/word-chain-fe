import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import RoomPurpleIcon from "assets/icons/roomPurple.svg";
import GameIcon from "assets/icons/game.svg";
import SendIcon from "assets/icons/send.svg";
import WinnerAnimation from "assets/animation/winner.json";
import MuteIcon from "assets/icons/mute.svg";
import UnMuteIcon from "assets/icons/unmute.svg";
import bellSound from "assets/voice/bell.mp3";

import { avatarList } from "constant/Avatar";
import { storageItem } from "utils/localstorage";
import {
  Button,
  Input,
  ProgressBar,
  Modal,
  Lottie,
  ErrorPopup,
} from "components";
import WordList from "pages/Modules/Game/components/WordList";
import NotStartedGame from "pages/Modules/Game/components/NotStartedGame";
import { userInfoSelector, selectIsMuted , updateIsMuted } from "redux/slices/user/userSlice";
import { CheckIsWordEnglish } from "localization/translate";
import {
  currentUserInfoSelector,
  lastWordSelector,
  isRoomStartedSelector,
  roomIdSelector,
  wordListSelector,
  winnerInfoSelector,
  updateWinnerUser,
  currentUserSelector,
  isFinishStatusSelector,
  updateRoomFinishStatus,
  updateRoomId,
  clearRoom,
  roomJoinErrorSelector,
  updateRoomJoinError,
} from "redux/slices/room/roomSlice";

const GameGround = () => {
  const progressBarRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [canSend, setCanSend] = useState(true);

  // User Selectors
  const myUserInfo = useSelector(userInfoSelector);
  const isMuted = useSelector(selectIsMuted);

  // Rooms Selectors
  const roomError = useSelector(roomJoinErrorSelector);
  const roomId = useSelector(roomIdSelector);
  const currentTurnUserInfo = useSelector(currentUserInfoSelector);
  const currentTurnUserId = useSelector(currentUserSelector);
  const isGameStarted = useSelector(isRoomStartedSelector);
  const lastWord = useSelector(lastWordSelector);
  const wordList = useSelector(wordListSelector);
  const winnerInfo = useSelector(winnerInfoSelector);
  const isGameFinish = useSelector(isFinishStatusSelector);

  const [word, setWord] = useState("");

  const localStorageField = "muted";

  let { id } = useParams();

  useEffect(() => {
    if (roomError) {
      dispatch(updateRoomJoinError(""));
      dispatch(clearRoom());
      navigate("/rooms");
    }
  }, [roomError]);

  useLayoutEffect(() => {
    if (!myUserInfo.name) {
      setShouldNavigate(true);
    } else {
      if (!roomId) {
        dispatch(updateRoomId(id));
      }
      dispatch({ type: "JOIN_ROOM" });
    }
  }, []);

  useEffect(() => {
    if (!isMuted) {
      const audio = new Audio(bellSound);
      audio.play();
    }
  }, [currentTurnUserId]);

  useEffect(() => {
    if (shouldNavigate) {
      navigate("/");
    }
  }, [shouldNavigate]);

  const isMobile = useMemo(() => window.innerWidth < 640, [window]);

  const isMyTurn = useMemo(
    () => currentTurnUserId == myUserInfo?.id,
    [currentTurnUserId]
  );

  const inputPlaceHolder = useMemo(
    () =>
      isMyTurn
        ? lastWord?.slice(-1) == "x"
          ? "You can type any English word"
          : `Type a word start by ${lastWord?.slice(-1)}`
        : `Now, ${currentTurnUserInfo?.name}'s turn!`,
    [isMyTurn, currentTurnUserId]
  );

  const handleCloseWinnerModal = () => {
    dispatch(updateRoomFinishStatus(false));
    dispatch(updateWinnerUser({}));
  };

  const handleStartProgress = () => {
    progressBarRef.current.handleStartProgress();
  };

  useEffect(() => {
    if (isGameStarted && currentTurnUserId) {
      setWord("");
      setIsError(false);
      handleStartProgress();
      if (isMobile) {
        handleUserGetFirst();
      }
    }
  }, [isGameStarted, currentTurnUserId]);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSendWord();
    }
  };

  const handleUserGetFirst = () => {
    const mobileUsers = document.getElementById("mobileUserList");
    const first = parseInt(0);
    const getActiveUser = document.getElementById(currentTurnUserId);
    mobileUsers.childNodes[first].before(getActiveUser);
  };

  const handleInputError = (isError) => {
    const wordInput = document.getElementById("game-word-input");
    if (isError) wordInput.style.border = "1px solid red";
    else wordInput.style.border = "1px solid transparent";
  };

  const handleSendWord = () => {
    if (!isMyTurn) return;
    if (!canSend) return;
    if (lastWord != "" && lastWord?.slice(-1) != "x") {
      if (word.charAt(0).toLowerCase() != lastWord.slice(-1)) {
        handleInputError(true);
        setIsError(true);
        setErrorText(`Must Start With ${lastWord.slice(-1)}`);
        return;
      }
    }
    const checkWordEnglish = CheckIsWordEnglish(word);
    const checkWordExist = wordList.find((exWord) => exWord.word == word);

    if (checkWordEnglish && !checkWordExist) {
      dispatch({ type: "SEND_WORD", payload: word });
      setWord("");
      handleInputError(false);
      setIsError(false);
    } else {
      if(!checkWordEnglish){
        setErrorText("Not Exist");
      }
      else if(checkWordExist){
        setErrorText("Already Written");
      }
      setIsError(true);
      handleInputError(true);
    }
  };

  const handleHandleTimeUp = () => {
    if (isMyTurn) {
      setWord("");
      setCanSend(false);
      dispatch({ type: "TIME_UP" });
    }
  };

  const handleLeaveRoom = () => {
    dispatch({ type: "LEAVE_ROOM" });
    dispatch(updateRoomFinishStatus(false));
    dispatch(updateWinnerUser({}));
    dispatch(clearRoom());
    navigate("/rooms");
  };

  const handleMuted = () => {
    const reverseMute = !isMuted;
    storageItem("u_muted", { isMuted: reverseMute, localStorageField });
    dispatch(updateIsMuted(reverseMute));
  };

  return (
    <div className="bg-darkGray relative flex-1 flex flex-col w-full md:w-3/5 mx-auto rounded-md p-6 space-y-4 overflow-y-auto">
      {!isGameStarted ? (
        <NotStartedGame />
      ) : (
        <>
        <img
          src={isMuted ? UnMuteIcon : MuteIcon}
          onClick={handleMuted}
          alt="mute"
          className="hidden md:block cursor-pointer w-6 h-6 absolute top-3 right-3"
        />
          <WordList />
          <ProgressBar ref={progressBarRef} endCallBack={handleHandleTimeUp} />
          <div className="flex relative h-14">
            <ErrorPopup id="error" errorText={errorText} isError={isError} />
            <Input
              id="gameword"
              inputName="game-word-input"
              placeholder={
                isMyTurn && !lastWord?.slice(-1)
                  ? "You must start game with any English word!"
                  : inputPlaceHolder
              }
              value={word}
              onChange={(e) => {
                setWord(e.target.value.toLowerCase().trim());
              }}
              onKeyDown={handleEnterPress}
              disabled={!isMyTurn}
            />
            <Button
              id="button1"
              buttonIcon={SendIcon}
              variant="purple"
              buttonText="Send"
              buttonClass="absolute w-24 h-full send-word-button-align"
              onClick={handleSendWord}
              disabled={!isMyTurn}
            />
          </div>
        </>
      )}
      <Modal
        ModalContentClass="relative"
        ModalClass="bg-purple"
        isOpen={isGameFinish}
        handleModalClose={handleCloseWinnerModal}
      >
        <Lottie
          animation={WinnerAnimation}
          containerClass="absolute winner-animation w-96 h-96"
        />
        <div className="h-80 overflow-y-scroll p-2 flex flex-col  items-center justify-center text-center gap-y-4">
          <p className="flex text-white text-2xl font-semibold items-center justify-center gap-4 ">
            <img
              src={avatarList[winnerInfo.userAvatarId]}
              className="bg-primary w-16  r h-16 rounded-full"
              alt=""
            />{" "}
            {winnerInfo.name} is Winner!
          </p>
          <p className="text-white text-lg w-full  md:w-1/2">
            You can continue to learn and win by starting the new game right now
            😊
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <Button
            id="okay"
            buttonIcon={GameIcon}
            variant="shadowGreen"
            buttonClass="mx-auto mt-2 w-1/3"
            buttonText="Stay Here"
            onClick={handleCloseWinnerModal}
          />
          <Button
            id="okay"
            buttonIcon={RoomPurpleIcon}
            variant="shadowPrimary"
            buttonClass="mx-auto mt-2 w-1/3"
            buttonText="Leave Game"
            onClick={handleLeaveRoom}
          />
        </div>
      </Modal>
    </div>
  );
};

export default GameGround;
