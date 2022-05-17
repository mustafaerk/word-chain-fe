import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authToken: ""
};

export const appSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateToken: (state, action) => {
            state.authToken = action.payload;
        },
        deleteToken: (state) => {
            state.authToken = "";
        }
    },
});

export const authTokenSelector = (state) => state.auth.authToken;

export const { updateToken, deleteToken } =
    appSlice.actions;

export const appSliceReducer = appSlice.reducer;
export const appSliceReducerName = appSlice.name;

export default appSlice.reducer;
