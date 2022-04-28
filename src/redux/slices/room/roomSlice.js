import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: {
    users: [],
    words: [],
    roomId:"",
  },
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    updateRoom: (state, action) => {
      state.room = action.payload;
    },
    updateRoomWords: (state, action) => {
      console.log(action.payload);
      state.room.words = [...state.room.words, action.payload];
    },
    updateUserList: (state, action) => {
      state.room.users = [...state.room.users, action.payload];
    },
    removeUserFromList: (state, action) => {
      console.log(
        [...state.room.users].filter((user) => user.id != action.payload.id)
      );
      state.room.users = state.room.users.filter(
        (user) => user.id != action.payload.id
      );
    },
  },
});

export const wordListSelector = (state) => state.room.room.words;
export const userListSelector = (state) => state.room.room.users;
export const roomIdSelector = (state) => state.room.room.roomId;

export const {
  updateRoom,
  updateRoomWords,
  updateUserList,
  removeUserFromList,
} = roomSlice.actions;

export const roomSliceReducer = roomSlice.reducer;
export const roomSliceReducerName = roomSlice.name;

export default roomSlice.reducer;
