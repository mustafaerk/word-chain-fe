import React from "react";

import { MobileRoom, Room } from "components";

import { useListRoomsQuery } from "redux/slices/room/roomApi";

const RoomList = () => {
  const { data: roomList, isLoading } = useListRoomsQuery();
  const isMobile = window.innerWidth < 640

  return isLoading ? <span> Loading </span>
    :
    !isMobile ? <div className="roomItem hidden sm:grid bg-darkGray rounded-lg py-14  px-5 h-5/6 overflow-y-auto gap-x-4 gap-y-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {roomList?.map((room, idx) =>
        <Room
          id={room.roomId}
          key={idx}
          isStarted={room.isStarted}
          roomAvatarId={room.roomAvatarId}
          roomName={room.roomName}
          roomUserLength={room.currentUserLength}
          roomUserLimit={room.roomSize}
        />
      )}
    </div> :
      <div className="flex sm:hidden w-full  flex-col  bg-darkGray rounded-lg p-5 h-5/6 overflow-x-hidden overflow-y-auto gap-y-2">
        {roomList?.map((room, idx) =>
          <MobileRoom
            id={room.roomId}
            key={idx}
            isStarted={room.isStarted}
            roomAvatarId={room.roomAvatarId}
            roomName={room.roomName}
            roomUserLength={room.currentUserLength}
            roomUserLimit={room.roomSize}
          />
        )}
      </div>
};


export default RoomList;
