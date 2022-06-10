import React from 'react'
import PropTypes from "prop-types";


import { avatarList } from "constant/Avatar";
import RoomPurpleIcon from "assets/icons/roomPurple.svg";
import GameIcon from "assets/icons/game.svg";
import WinnerAnimation from "assets/animation/winner.json";

import { Lottie, Button } from "components";

const WinnerModalContent = ({ handleCloseWinnerModal, handleLeaveRoom, winnerInfo }) => {
    return (
        <>
            <Lottie
                animation={WinnerAnimation}
                containerClass="absolute winner-animation w-96 h-96"
            />
            <div className="h-80 overflow-y-scroll p-2 flex flex-col  items-center justify-center text-center space-y-4">
                <p className="flex text-white text-2xl font-semibold items-center justify-center space-4 ">
                    <img
                        src={avatarList[winnerInfo?.userAvatarId || "1"]}
                        className="bg-primary w-16  r h-16 rounded-full"
                        alt=""
                    />
                    &nbsp;{winnerInfo.name}&nbsp;is Winner!
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
                    onClick={() => handleCloseWinnerModal()}
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
        </>
    )
}

WinnerModalContent.propTypes = {
    handleCloseWinnerModal: PropTypes.func,
    handleLeaveRoom: PropTypes.func,
    winnerInfo: PropTypes.any,
};

export default WinnerModalContent;