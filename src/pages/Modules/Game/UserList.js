import React from "react";
import { useSelector } from "react-redux";

import { UserCard, MobileUserCard } from "components";
import {
  userListSelector,
  currentUserSelector,
} from "redux/slices/room/roomSlice";

const UserList = () => {
  const userList = useSelector(userListSelector);
  const currentUser = useSelector(currentUserSelector);
  const isMobile = window.innerWidth < 640;


  return isMobile ? (
    <div
      id="mobileUserList"
      className="flex overflow-x-auto h-h16 min-h-150 md:h-full sm:hidden overflow-y-hidden scroll-smooth"
    >
      {userList.map((user, idx) => (
        <MobileUserCard
          id={user.id}
          key={user.name + user.userAvatarId + idx}
          avatarId={user.userAvatarId}
          point={user.point}
          name={user.name}
          isActive={user.id == currentUser}
          isEliminated={user.isEliminated}
          language={user.language}
        />
      ))}
    </div>
  ) : (
    <div className="lg:w-1/4 md:w-1/3 hidden sm:block space-y-2 bg-darkGray p-3 h-full overflow-y-auto rounded-md">
      {userList.map((user, idx) => (
        <UserCard
          id={user.id}
          key={user.name + user.userAvatarId + idx}
          avatarId={user.userAvatarId}
          point={user.point}
          name={user.name}
          isActive={user.id == currentUser}
          isEliminated={user.isEliminated}
          language={user.language}
        />
      ))}
    </div>
  );
};

export default UserList;
