import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import { useGetUserIpQuery } from "redux/slices/app/appApi";
import {
  updateUserInfoField,
  updateUserInfo,
} from "redux/slices/user/userSlice";
import { updateToken, authTokenSelector } from "redux/slices/app/appSlice";
import { getStoragedItem } from "utils/localstorage";
import ProtectedRoute from "routing/ProtectedRoute";

const Login = React.lazy(() => import("pages/Views/Login"));
const Game = React.lazy(() => import("pages/Views/Game"));
const Rooms = React.lazy(() => import("pages/Views/Rooms"));
const CreateRoom = React.lazy(() => import("pages/Views/CreateRoom"));

function Router() {
  const dispatch = useDispatch();
  const authToken = useSelector(authTokenSelector);

  const { data } = useGetUserIpQuery();
  const [userInfo, setUserInfo] = useState('');

  const getToken = async () => {
    const token = await getStoragedItem({ key: "u_tkn" });
    if (token.value) {
      dispatch(updateToken(token.value));
    }
  };

  useEffect(() => {
    dispatch({ type: "LISTEN_ROOM" });
  }, []);


  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const oldUserInfo = getStoragedItem({ key: "u_user" });
    setUserInfo(oldUserInfo)
    if (oldUserInfo) {
      dispatch(updateUserInfo(oldUserInfo.value.userInfo));
    } else {
      const userLang = navigator.language || navigator.userLanguage || 'tr';
      const unique_id = uuid();
      dispatch(
        updateUserInfoField({ value: userLang.slice(0, 2), field: "language" })
      );
      dispatch(updateUserInfoField({ value: unique_id, field: "id" }));
    }
  }, [data]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>...</>}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/play/:id"
          element={
            <ProtectedRoute user={userInfo || authToken}>
              <React.Suspense fallback={<>...</>}>
                <Game />
              </React.Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute user={userInfo || authToken}>
              <React.Suspense fallback={<>...</>}>
                <Rooms />
              </React.Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/createRoom"
          element={
            <ProtectedRoute user={userInfo || authToken}>
              <React.Suspense fallback={<>...</>}>
                <CreateRoom />
              </React.Suspense>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
