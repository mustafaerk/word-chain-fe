import React, { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import RoomPurpleIcon from "assets/icons/roomPurple.svg";
import GameIcon from "assets/icons/game.svg";
import SendIcon from "assets/icons/send.svg";
import WinnerAnimation from "assets/animation/winner.json";

import { avatarList } from "constant/Avatar";
import { Button, Input, ProgressBar, Modal, Lottie } from "components";
import WordList from "pages/Modules/Game/components/WordList";
import NotStartedGame from "pages/Modules/Game/components/NotStartedGame";
import {
  currentUserInfoSelector,
  lastWordSelector,
  isRoomStartedSelector,
  roomIdSelector,
  winnerInfoSelector,
  updateWinnerUser,
  updateLastWord,
  currentUserSelector,
  isWritedSelector,
} from "redux/slices/room/roomSlice";
import { useEliminateUserMutation } from "redux/slices/room/roomApi";
import { userInfoSelector } from "redux/slices/user/userSlice";
import { CheckIsWordEnglish } from "localization/translate";
import { apiResHandler } from "utils/axiosBaseQuery";

const GameGround = () => {
  const progressBarRef = useRef();
  const dispatch = useDispatch();

  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [word, setWord] = useState("");

  const [eliminateUser] = useEliminateUserMutation();

  const currentUser = useSelector(currentUserSelector);
  const isWrited = useSelector(isWritedSelector);
  const winnerInfo = useSelector(winnerInfoSelector);
  const currentUserInfo = useSelector(currentUserInfoSelector);
  const lastWord = useSelector(lastWordSelector);
  const userInfo = useSelector(userInfoSelector);
  const isRoomStarted = useSelector(isRoomStartedSelector);
  const roomId = useSelector(roomIdSelector);

  const isMobile = window.innerWidth < 640;

  const isMyTurn = useMemo(
    () => currentUserInfo.id == userInfo.id,
    [currentUserInfo]
  );
  const inputPlaceHolder = useMemo(
    () =>
      isMyTurn
        ? `You must type a word start by ${lastWord?.slice(-1)}`
        : `Now,${currentUserInfo.name}'s turn!`,
    [isMyTurn]
  );

  const handleHandleEliminateUser = () => {
    if (isMyTurn) {
      const data = { roomId };
      apiResHandler(eliminateUser({ data }), (res) => {
        console.log(res);
        if (res.gameStatus == "eliminated") {
          dispatch({ type: "ELIMINATE_USER", payload: res.nextUserId });
        } else if (res.gameStatus == "finish") {
          dispatch({ type: "FINISH_GAME", payload: res.winner });
        }
      });
    }
  };

  const handleCloseWinnerModal = () => {
    setShowWinnerModal(false);
    dispatch(updateWinnerUser({}));
  };

  useEffect(() => {
    dispatch({ type: "LISTEN_ROOM" });
  }, []);

  useEffect(() => {
    if (winnerInfo.id) {
      setShowWinnerModal(true);
    }
  }, [winnerInfo]);

  const handleStartProgress = () => {
    progressBarRef.current.handleStartProgress();
  };

  useEffect(() => {
    if (isRoomStarted && currentUser) {
      handleStartProgress();
    }
  }, [isRoomStarted, currentUser]);

  if (isMobile) {
    useEffect(() => {
      handleUserGetMiddle();
    }, [currentUserInfo]);

    const handleUserGetMiddle = () => {
      const mobileUsers = document.getElementById("mobileUserList");
      const middle = parseInt(mobileUsers.childElementCount / 2);
      const getActiveUser = document.getElementById(currentUserInfo.id);
      if (middle > 0)
        if (getActiveUser != mobileUsers.childNodes[middle - 1])
          mobileUsers.childNodes[middle].before(getActiveUser);
        else mobileUsers.childNodes[middle].after(getActiveUser);
    };
  }

  const handleInputError = (isError) => {
    
    const wordInput = document.getElementById("game-word-input");
    if (isError) wordInput.style.border = "1px solid red";
    else wordInput.style.border = "1px solid transparent";
  };

  const handleLastWord = (wordie) => {
    dispatch(updateLastWord(wordie));
  };

  const handleSendWord = () => {
    dispatch(updateLastWord(word));
    
    console.log(isWrited);
    if (lastWord != "") {
      if (word.charAt(0).toLowerCase() != lastWord.slice(-1)) {
        handleInputError(true);
        return;
      }
    }
    const checkWordExist = CheckIsWordEnglish(word);
    if (checkWordExist && !isWrited) {
      dispatch({ type: "NEW_MESSAGE", payload: word });
      setWord("");
      handleInputError(false);
    } else handleInputError(true);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSendWord();
    }
  };

  return (
    <div className="bg-darkGray flex flex-col w-full h-full md:w-3/5 mx-auto rounded-md p-6 space-y-4">
      {!isRoomStarted ? (
        <NotStartedGame />
      ) : (
        <>
          <WordList />
          <ProgressBar
            ref={progressBarRef}
            endCallBack={handleHandleEliminateUser}
          />
          <div className="flex relative h-14">
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
                setWord(e.target.value);
                handleLastWord(e.target.value);
              }}
              onKeyDown={handleEnterPress}
              disabled={!isMyTurn}
              autoFocusInput={isMyTurn}
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
        isOpen={showWinnerModal}
        handleModalClose={handleCloseWinnerModal}
      >
        <Lottie
          animation={WinnerAnimation}
          containerClass="absolute winner-animation w-96 h-96"
          st
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
          <p className="text-white text-lg w-1/2">
            You can continue to learn and win by starting the new game right now
            😊
          </p>
        </div>
        <div className="flex">
          <Button
            id="okay"
            buttonIcon={GameIcon}
            variant="shadowGreen"
            buttonClass="mx-auto mt-2 w-28"
            buttonText="Start Game"
          />
          <Button
            id="okay"
            buttonIcon={RoomPurpleIcon}
            variant="shadowPrimary"
            buttonClass="mx-auto mt-2 w-28"
            buttonText="Leave Game"
          />
        </div>
      </Modal>
    </div>
  );
};

export default GameGround;
