import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: { avatarId: "1", name: "", language: "es", id: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUserInfoField: (state, action) => {
      state.userInfo[action.payload.field] = action.payload.value;
    },
    updateUserAvatar: (state, action) => {
      state.userInfo.avatarId = action.payload;
    },
  },
});

export const userInfoSelector = (state) => state.user.userInfo;
export const selectUserAvatarId = (state) => state.user.userInfo.avatarId;

export const { updateUserInfo, updateUserInfoField, updateUserAvatar } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
export const userReducerName = userSlice.name;

export default userSlice.reducer;
