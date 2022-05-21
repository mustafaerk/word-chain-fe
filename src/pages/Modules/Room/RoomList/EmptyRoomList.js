import React from 'react'

import WaitAnimation from "assets/animation/wait.json";
import { Lottie } from 'components';

const NotStartedGame = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full gap-y-4 text-center'>
            <Lottie
                animation={WaitAnimation}
                containerClass="w-24 h-24 md:w-48 md:h-48"
            />
            <span className='flex flex-col text-md text-white items-center'>
                <div className='text-lightGray'>There are currently no rooms available for the game!</div>
                <div className='text-white font-semibold'> You can quickly create your own room and play </div>
            </span>
        </div>
    )
}

export default NotStartedGame