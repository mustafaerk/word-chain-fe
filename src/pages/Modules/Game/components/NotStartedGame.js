import React from 'react'
import { useSelector, useDispatch } from "react-redux";

import GameIcon from "assets/icons/game.svg";
import { avatarList } from "constant/Avatar";
import { Button } from 'components';
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
        <div className='flex flex-col items-center justify-center h-full gap-y-4 text-center'>
            <div className='text-4xl text-white font-semibold'>The game has not started yet!</div>
            <img className='w-14 h-14' src={avatarList[roomOwner?.userAvatarId || '1']} />
            <span className='flex text-2xl text-white items-center'>
                {roomOwner?.id != userInfo?.id ? `Waiting for ${roomOwner?.name || ''} to start the game!` : "You must start the game!"}
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