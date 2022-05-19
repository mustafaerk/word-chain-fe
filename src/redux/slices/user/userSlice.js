import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    userAvatarId: "8",
    name: "",
    language: "es",
    id: "",
    point: 0,
    isEliminated: false,
    isOnline: true,
  },
  isMuted: false,
  isRefleshed: false,
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
      state.userInfo.userAvatarId = action.payload;
    },
    updateIsMuted: (state, action) => {
      state.isMuted = action.payload;
    },
    updateIsRefleshed: (state, action) => {
      state.isRefleshed = action.payload;
    },
  },
});

export const userInfoSelector = (state) => state.user.userInfo;
export const selectUserAvatarId = (state) => state.user.userInfo.userAvatarId;
export const selectIsMuted = (state) => state.user.isMuted;
export const selectIsRefleshed = (state) => state.user.isRefleshed;

export const {
  updateUserInfo,
  updateUserInfoField,
  updateUserAvatar,
  updateIsMuted,
  updateIsRefleshed,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
export const userReducerName = userSlice.name;

export default userSlice.reducer;
