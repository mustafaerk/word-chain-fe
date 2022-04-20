import React from 'react'

import LeftLogin from "pages/Modules/Login/LeftLogin";
import Main from "pages/Layout/Main";

const Login = () => {
    return (
        <Main>
            <div className='flex items-center justify-center bg-darkGray w-full h-full '>
                <LeftLogin />
            </div>
        </Main>
    )
}

export default Login