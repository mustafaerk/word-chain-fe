import React from "react";

import { UserCard } from "components";

const CurrentUser = () => {
  return (
    <div className="bg-primary flex p-2">
      <div>
        <UserCard
          avatarId={"1"}
          point={10}
          username={"Ahmet"}
          isActive={false}
        />
      </div>
      <div></div>
    </div>
  );
};

CurrentUser.propTypes = {};

export default CurrentUser;
