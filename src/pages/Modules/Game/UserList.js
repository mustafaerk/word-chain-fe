import React from "react";
import { useSelector } from "react-redux";

import { UserCard } from "components";
import { userListSelector, currentUserSelector } from "redux/slices/room/roomSlice";

const UserList = () => {
  const userList = useSelector(userListSelector);
  const currentUser = useSelector(currentUserSelector);

  return (
    <div className="lg:w-1/4 md:w-1/3 hidden md:block space-y-2 bg-darkGray p-3 h-full overflow-y-auto rounded-md">
      {userList.map((user, idx) => (
        <UserCard
          id={user.userAvatarId}
          key={user.name + user.userAvatarId + idx}
          avatarId={user.userAvatarId}
          point={user.point}
          name={user.name}
          isActive={user.id == currentUser}
        />
      ))}
    </div>
  );
};

export default UserList;
