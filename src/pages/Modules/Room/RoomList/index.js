import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MobileRoom, Room } from "components";

import { selectIsRefleshed, updateIsRefleshed } from "redux/slices/user/userSlice";
import { useListRoomsQuery } from "redux/slices/room/roomApi";
import EmptyRoomList from "pages/Modules/Room/RoomList/EmptyRoomList";

const RoomList = () => {
  const { data: roomList, refetch, isLoading } = useListRoomsQuery();
  const isMobile = window.innerWidth < 640;
  const isRefleshed = useSelector(selectIsRefleshed);
  const dispatch = useDispatch();


  useEffect(() => {
    if (isRefleshed) {
      refetch();
      dispatch(updateIsRefleshed(false));
    }
  }, [isRefleshed]);

  return isLoading ? (
    <span> Loading </span>
  ) : !isMobile ? (
    roomList?.length ?
      <div className="roomItem hidden sm:grid bg-darkGray rounded-lg py-14  px-5 h-5/6 overflow-y-auto gap-x-4 gap-y-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {roomList?.map((room, idx) => (
          <Room
            id={room.roomId}
            key={idx}
            isStarted={room.isStarted}
            roomAvatarId={room.roomAvatarId}
            roomName={room.roomName}
            roomUserLength={room.currentUserLength}
            roomUserLimit={room.roomSize}
          />
        ))}
      </div> :
      <div className="flex bg-darkGray rounded-lg py-14 px-5 h-5/6 justify-center">
        <EmptyRoomList />
      </div>
  ) : (
    roomList?.length ?
      <div className="roomItem flex flex-col bg-darkGray rounded-lg py-14 px-5 h-full overflow-y-auto gap-x-4 gap-y-5">
        {roomList?.map((room, idx) => (
          <MobileRoom
            id={room.roomId}
            key={idx}
            isStarted={room.isStarted}
            roomAvatarId={room.roomAvatarId}
            roomName={room.roomName}
            roomUserLength={room.currentUserLength}
            roomUserLimit={room.roomSize}
          />
        ))}
      </div>
      :
      <div className="flex bg-darkGray rounded-lg py-14 px-5 h-5/6 justify-center">
        <EmptyRoomList />
      </div>

  );
};

export default RoomList;
