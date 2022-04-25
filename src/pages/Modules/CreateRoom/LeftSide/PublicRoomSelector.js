import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import OpenIcon from "assets/icons/open.svg";
import CloseIcon from "assets/icons/close.svg";
import EyeIcon from "assets/icons/eye.svg";
import { updateRoomField, createRoomInfo } from 'redux/slices/room/createRoomSlice'

const PublicRoomSelector = () => {
    const dispatch = useDispatch();
    const roomInfo = useSelector(createRoomInfo);

    const handleIsPublic = (val) => {
        dispatch(updateRoomField({ field: 'isPublic', value: val }))
    }

    return (
        <div className='space-y-2 p-1 text-white'>
            <label className="flex gap-x-2 text-white items-center font-semibold">
                <img className="w-4 h-4" src={EyeIcon} alt="" />
                <span> Is Public? </span>
            </label>
            <div className='flex gap-4 items-center flex-col xl:flex-row'>
                <div className={`w-full flex border-2 font-semibold border-primary ${roomInfo.isPublic ? 'bg-purple' : 'bg-primary'} rounded-md py-3 px-8 gap-x-2 text-sm items-center cursor-pointer`} onClick={() => handleIsPublic(true)}>
                    <img src={OpenIcon} alt="" /> Public
                </div>
                <div className={`w-full flex border-2 font-semibold border-primary ${!roomInfo.isPublic ? 'bg-purple' : 'bg-primary'} rounded-md py-3 px-8 gap-x-2 text-sm items-center cursor-pointer`} onClick={() => handleIsPublic(false)}>
                    <img src={CloseIcon} alt="" /> Private
                </div>
            </div>
        </div>
    )
}

export default PublicRoomSelector