import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: {
    users: [],
    words: [],
    roomId: "",
    currentUserTurn: "",
  },
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    updateRoom: (state, action) => {
      state.room = action.payload;
    },
    clearRoom: (state) => {
      state.room = initialState.room;
    },
    updateRoomWords: (state, action) => {
      state.room.currentUserTurn = action.payload.nextUserId;
      state.room.words = [...state.room.words, action.payload.word];
    },
    updateUserList: (state, action) => {
      state.room.users = [...state.room.users, action.payload];
    },
    changeUserList: (state, action) => {
      state.room.users = action.payload;
    },
  },
});

export const removeUserFromList = (data) => {
  return async (dispatch, getState) => {
    const userList = getState().room.room.users;
    console.log(data, getState().room)
    const newUserList = userList.filter(user => user.id == data.id);
    dispatch(changeUserList(newUserList))
  };
};

export const wordListSelector = (state) => state.room.room.words;
export const userListSelector = (state) => state.room.room.users;
export const currentUserSelector = (state) => state.room.room.currentUserTurn;
export const currentUserInfoSelector = (state) => state.room.room.users.find(user => user.id == state.room.room.currentUserTurn);
export const roomIdSelector = (state) => state.room.room.roomId;
export const lastLetterSelector = (state) => state.room.room.words[state.room.room.words.length - 1]?.word?.slice(-1) || '';

export const {
  updateRoom,
  clearRoom,
  updateRoomWords,
  updateUserList,
  changeUserList
} = roomSlice.actions;

export const roomSliceReducer = roomSlice.reducer;
export const roomSliceReducerName = roomSlice.name;

export default roomSlice.reducer;
