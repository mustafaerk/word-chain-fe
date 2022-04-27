import { combineReducers, configureStore } from "@reduxjs/toolkit";
import middleware from "redux/middleware";
import rootReducer from "redux/rootReducer";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { persistStore, persistReducer } from "reduxjs-toolkit-persist";

const persistConfig = {
  key: "REDUX_TOOLKIT_PERSIST_KEY",
  storage,
  whitelist: ["auth", "room", "user"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export const persistedStore = persistStore(store);
