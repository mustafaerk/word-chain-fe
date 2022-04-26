import React from 'react'
import PropTypes from "prop-types";

const RoomAvatar = ({ emojiInfo, onClick, isSelected, emojiId }) => {
  return (
    <div onClick={() => onClick(emojiId)} className={`flex items-center justify-center flex-col space-y-4 cursor-pointer  ${isSelected ? "bg-purple" : "bg-primary"} rounded-md w-full h-24 sm:h-36 md:h-52  px-4  `}>
      <img className="w-24 h-24 bg-purple p-2 rounded-full border-4 border-darkGray" src={emojiInfo.emoji} />
      <span className='text-base xl:text-lg text-white'> {emojiInfo.text}</span>
    </div>

  )
}


RoomAvatar.propTypes = {
  emojiInfo: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  emojiId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default RoomAvatar;