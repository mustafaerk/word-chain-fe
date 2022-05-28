import React from "react";

import LeftSide from "pages/Modules/CreateRoom/LeftSide";
import RightSide from "pages/Modules/CreateRoom/RightSide";

const CreateRoom = () => {
  return (
    <div className="flex p-4 h-screen space-x-4 md:h-h95">
      <div className="w-full md:w-1/4 bg-darkGray flex flex-col justify-center rounded-md p-6 space-y-2">
        <LeftSide />
      </div>
      <div className="hidden md:grid w-3/4 grid-cols-3 md:grid-cols-3 lg:grid-cols-4 bg-darkGray gap-2 p-2 overflow-y-auto rounded-md">
        <RightSide />
      </div>
    </div>
  );
};

export default CreateRoom;
