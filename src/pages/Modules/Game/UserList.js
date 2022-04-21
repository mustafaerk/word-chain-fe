import React from "react";

import { UserCard } from "components";

const arr = [
  { avatarId: "1", name: "Ahmet", point: 30, isActive: false },
  { avatarId: "4", name: "Cigi", point: 50, isActive: false },
  { avatarId: "3", name: "Gym", point: 101, isActive: true },
  { avatarId: "5", name: "Juan Jose", point: 10, isActive: false },
  { avatarId: "11", name: "RYB", point: 10, isActive: false },
  { avatarId: "12", name: "Sarah", point: 10, isActive: false },
  { avatarId: "12", name: "Sarah", point: 10, isActive: false },
  { avatarId: "12", name: "Sarah", point: 10, isActive: false },
];

const UserList = () => {
  return (
    <div className="lg:w-1/4 md:w-1/3 hidden md:block space-y-2 bg-darkGray p-3 h-full overflow-y-auto rounded-md">
      {arr.map((user, idx) => (
        <UserCard
          key={user.name + user.avatarId + idx}
          avatarId={user.avatarId}
          point={user.point}
          username={user.name}
          isActive={user.isActive}
        />
      ))}
    </div>
  );
};

export default UserList;
