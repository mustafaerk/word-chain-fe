import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { useGetUserIpQuery } from "redux/slices/app/appApi";
import { updateUserInfoField } from "redux/slices/user/userSlice";
import { updateToken } from "redux/slices/app/appSlice";
import { getStoragedItem } from "utils/localstorage";

const Example = React.lazy(() => import("pages/Views/Example"));
const Login = React.lazy(() => import("pages/Views/Login"));
const Game = React.lazy(() => import("pages/Views/Game"));
const Rooms = React.lazy(() => import("pages/Views/Rooms"));
const CreateRoom = React.lazy(() => import("pages/Views/CreateRoom"));

function Router() {
  const dispatch = useDispatch();

  const { data } = useGetUserIpQuery();

  useEffect(() => {
    dispatch({ type: "LISTEN_ROOM" });
  }, []);

  const getToken = async () => {
    const token = await getStoragedItem({ key: 'u_tkn' });
    if (token.value) {
      dispatch(updateToken(token.value));
    }
  }

  useEffect(() => {
    getToken();
  }, [])

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    dispatch(
      updateUserInfoField({ value: userLang.slice(0, 2), field: "language" })
    );

    const unique_id = uuid();
    if (data) {
      dispatch(updateUserInfoField({ value: unique_id, field: "id" }));
    } else {
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
            <React.Suspense fallback={<>...</>}>
              <Game />
            </React.Suspense>
          }
        />
        <Route
          path="/reports"
          element={
            <React.Suspense fallback={<>...</>}>
              <Example />
            </React.Suspense>
          }
        />
        <Route
          path="/rooms"
          element={
            <React.Suspense fallback={<>...</>}>
              <Rooms />
            </React.Suspense>
          }
        />
        <Route
          path="/createRoom"
          element={
            <React.Suspense fallback={<>...</>}>
              <CreateRoom />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
