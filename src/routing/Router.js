import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import Spinner from "pages/Layout/Spinner";
import { useGetUserIpQuery } from "redux/slices/app/appApi";
import {
  updateUserInfoField,
  updateUserInfo,
  updateIsMuted,
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

  const unique_id = useMemo(() => uuid(), [])

  useEffect(() => {
    dispatch({ type: "LISTEN_ROOM" });
  }, []);


  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const oldUserInfo = getStoragedItem({ key: "u_user" });
    const oldMutedInfo = getStoragedItem({ key: "u_muted" });
    setUserInfo(oldUserInfo)
    if (oldMutedInfo) {
      dispatch(updateIsMuted(oldMutedInfo.value.isMuted));
    } 
    if (oldUserInfo) {
      dispatch(updateUserInfo(oldUserInfo.value.userInfo));
    } else {
      const userLang = navigator.language || navigator.userLanguage || 'tr';

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
            <React.Suspense fallback={<Spinner />}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/play/:id"
          element={
            <ProtectedRoute user={userInfo || authToken}>
              <React.Suspense fallback={<Spinner />}>
                <Game />
              </React.Suspense>
            </ProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute user={userInfo || authToken}>
              <React.Suspense fallback={<Spinner />}>
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
