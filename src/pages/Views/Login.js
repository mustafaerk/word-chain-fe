import React from "react";

import LeftLogin from "pages/Modules/Login/LeftLogin";
import Main from "pages/Layout/Main";
import RightLogin from "pages/Modules/Login/RightLogin";

const Login = () => {
  return (
    <Main>
      <div className="flex items-center justify-center bg-darkGray w-full h-full space-x-4">
        <LeftLogin className="flex-1" />
        <div className="hidden md:block h-h84 w-1 bg-white rounded-100 mx-5"></div>
        <RightLogin className="flex-1" />
      </div>
    </Main>
  );
};

export default Login;
