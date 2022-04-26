import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: {
    users: [],
    words: [
      { word: "apple", ownerId: "" },
      { word: "Enemy", ownerId: "" },
      { word: "Yourself", ownerId: "" },
      { word: "Found", ownerId: "" },
      { word: "Door", ownerId: "" },
      { word: "room", ownerId: "" },
      { word: "money", ownerId: "" },
    ],
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
        console.log(action.payload)
      state.room.words = [...state.room.words, action.payload];
    },
    updateUserList: (state, action) => {
      state.room.users = [state.room.users, ...action.payload];
    },
  },
});

export const wordListSelector = (state) => state.room.room.words;

export const { updateRoom, updateRoomWords } = roomSlice.actions;

export const roomSliceReducer = roomSlice.reducer;
export const roomSliceReducerName = roomSlice.name;

export default roomSlice.reducer;
