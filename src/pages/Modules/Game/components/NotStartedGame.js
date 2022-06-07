import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import WaitAnimation from "assets/animation/wait.json";
import GameIcon from "assets/icons/game.svg";
import { avatarList } from "constant/Avatar";
import { Button, Lottie } from 'components';
import { roomOwnerSelector } from "redux/slices/room/roomSlice";
import { userInfoSelector } from "redux/slices/user/userSlice";

const NotStartedGame = () => {
    const dispatch = useDispatch();
    const roomOwner = useSelector(roomOwnerSelector);
    const userInfo = useSelector(userInfoSelector);

    const handleStartGame = () => {
        dispatch({ type: "START_ROOM" });
    }

    return (
        <div className='flex flex-col items-center justify-center h-full space-y-4 text-center'>
            <div className={`flex items-center justify-between flex-col text-white rounded-lg p-4 space-y-1`}>
                <div className={`rounded-full bg-skyDark`}>
                    <img
                        className="rounded-full w-16"
                        src={avatarList[roomOwner?.userAvatarId || '1']}
                        alt="Icon"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col space-y-2 items-center">
                    <div className="text-md text-white">{roomOwner?.name || ''}</div>
                </div>
            </div>
            <Lottie
                animation={WaitAnimation}
                containerClass="w-24 h-24 md:w-48 md:h-48"
            />

            <span className='flex flex-col text-md text-white items-center'>
                <div className='text-lightGray'>The Game Has Not Started Yet!</div>
                <div className='text-white font-semibold'>  {roomOwner?.id != userInfo?.id ? `Waiting For ${roomOwner?.name || ''} To Start The Game!` : "You Must Start The Game!"}</div>
            </span>

            {roomOwner?.id == userInfo?.id && <Button
                id="startGame"
                buttonIcon={GameIcon}
                variant="shadowSecondary"
                buttonText="Start Game"
                buttonClass='w-40'
                onClick={handleStartGame}
            />}
        </div>
    )
}

export default NotStartedGame