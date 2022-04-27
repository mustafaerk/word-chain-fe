import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: {
    users: [],
    words: [],
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
      console.log(action.payload)
      state.room.users = [...state.room.users, action.payload];
    },
  },
});

export const wordListSelector = (state) => state.room.room.words;
export const userListSelector = (state) => state.room.room.users;

export const { updateRoom, updateRoomWords, updateUserList } =
  roomSlice.actions;

export const roomSliceReducer = roomSlice.reducer;
export const roomSliceReducerName = roomSlice.name;

export default roomSlice.reducer;
