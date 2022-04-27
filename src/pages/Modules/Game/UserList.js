import React from "react";
import { useSelector } from "react-redux";

import { UserCard } from "components";
import { userListSelector } from "redux/slices/room/roomSlice";

const UserList = () => {
  const userList = useSelector(userListSelector);

  return (
    <div className="lg:w-1/4 md:w-1/3 hidden md:block space-y-2 bg-darkGray p-3 h-full overflow-y-auto rounded-md">
      {userList.map((user, idx) => (
        <UserCard
          key={user.name + user.userAvatarId + idx}
          avatarId={user.userAvatarId}
          point={user.point}
          name={user.name}
          isActive={user.isActive}
        />
      ))}
    </div>
  );
};

export default UserList;
