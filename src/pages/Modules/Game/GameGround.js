import React, { useEffect, useState, useMemo ,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SendIcon from "assets/icons/send.svg";
import { Button, Input, ProgressBar } from "components";
import WordList from "pages/Modules/Game/components/WordList";
import NotStartedGame from "pages/Modules/Game/components/NotStartedGame";
import { currentUserInfoSelector, lastLetterSelector, isRoomStartedSelector } from "redux/slices/room/roomSlice";
import { userInfoSelector } from "redux/slices/user/userSlice";
import { CheckIsWordEnglish } from "localization/translate";


const GameGround = () => {
  const progressBarRef = useRef();
  const dispatch = useDispatch();

  const currentUserInfo = useSelector(currentUserInfoSelector);
  const lastLetter = useSelector(lastLetterSelector);
  const userInfo = useSelector(userInfoSelector);
  const isRoomStarted = useSelector(isRoomStartedSelector);
  const [word, setWord] = useState("");
  const isMobile = window.innerWidth < 640;
  

  const isMyTurn = useMemo(() => currentUserInfo.id == userInfo.id, [currentUserInfo]);
  const inputPlaceHolder = useMemo(() => isMyTurn ? `You must type a word start by ${lastLetter}` : `Now,${currentUserInfo.name}'s turn!`, [isMyTurn])


  useEffect(() => {
    dispatch({ type: "LISTEN_ROOM" });
  }, []);

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

  const handleSendWord = () => {
    const checkWordExist = CheckIsWordEnglish(word);
    if (checkWordExist) {
      dispatch({ type: "NEW_MESSAGE", payload: word });
      setWord("");
    } else {
      alert("Word is not English");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSendWord();
    }
  };



  return (
    <div className="bg-darkGray flex flex-col w-full h-full md:w-3/5 mx-auto rounded-md p-6 space-y-4">
      {!isRoomStarted ?
        <NotStartedGame />
        :
        <>
          <WordList />
          <ProgressBar ref={progressBarRef} />
          <div className="flex relative h-14">
            <Input
              id="gameword"
              inputName="gameword"
              placeholder={isMyTurn && !lastLetter ? "You must start game with any English word!" : inputPlaceHolder}
              value={word}
              onChange={(e) => setWord(e.target.value)}
              onKeyDown={handleEnterPress}
              disabled={!isMyTurn}
              autoFocusInput={isMyTurn}
            />
            <Button
              id="button1"
              buttonIcon={SendIcon}
              variant="purple"
              buttonText="Send"
              buttonClass="absolute right-0 w-24 h-full"
              onClick={handleEnterPress}
              disabled={!isMyTurn}
            />
          </div>
        </>
      }
    </div>
  );
};

export default GameGround;
