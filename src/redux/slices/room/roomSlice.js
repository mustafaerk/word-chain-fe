import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  room: {
    users: [],
    words: [],
    roomId: "",
    currentUserTurn: "",
    isStarted: false
  },
  winnerUser: {
    id: "",
    name: "",
  },
  lastWord : "",
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    updateLastWord: (state, action) => {
      state.lastWord = action.payload;
    },
    updateRoom: (state, action) => {
      state.room = action.payload;
    },
    clearRoom: (state) => {
      state.room = initialState.room;
    },
    updateWinnerUser: (state, action) => {
      state.winnerUser = action.payload;
    },
    updateRoomWords: (state, action) => {
      state.room.currentUserTurn = action.payload.nextUserId;
      state.room.words = [...state.room.words, action.payload.word];
    },
    changeUserTurn: (state, action) => {
      state.room.currentUserTurn = action.payload;
    },
    updateUserList: (state, action) => {
      state.room.users = [...state.room.users, action.payload];
    },
    changeUserList: (state, action) => {
      state.room.users = action.payload;
    },
    updateRoomStartStatus: (state, action) => {
      state.room.isStarted = action.payload;
      state.room.isActive = action.false;
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

export const eliminateUserFromList = (userId, nextUserId) => {
  return async (dispatch, getState) => {
    let userList = getState().room.room.users;
    userList = userList.map((user) => {
      return {
        ...user,
        isEliminated: user.id == userId && true
      };
    })
    dispatch(changeUserList(userList));
    dispatch(changeUserTurn(nextUserId));
  };
};


export const wordListSelector = (state) => state.room.room.words;
export const winnerInfoSelector = (state) => state.room.winnerUser;
export const userListSelector = (state) => state.room.room.users;
export const isRoomStartedSelector = (state) => state.room.room.isStarted;
export const currentUserSelector = (state) => state.room.room.currentUserTurn;
export const currentUserInfoSelector = (state) => state.room.room.users.find(user => user.id == state.room.room.currentUserTurn);
export const roomOwnerSelector = (state) => state.room.room.users.find(user => user.id == state.room.room.ownerId);
export const roomIdSelector = (state) => state.room.room.roomId;
export const lastWordSelector = (state) => state.room.room.words[state.room.room.words.length - 1]?.word.toLowerCase() || '';
export const isWritedSelector = (state) => state.room.room.words.find(word => word.word == state.room.lastWord);

export const {
  updateLastWord,
  updateRoom,
  clearRoom,
  updateRoomWords,
  updateUserList,
  changeUserList,
  updateRoomStartStatus,
  changeUserTurn,
  updateWinnerUser
} = roomSlice.actions;

export const roomSliceReducer = roomSlice.reducer;
export const roomSliceReducerName = roomSlice.name;

export default roomSlice.reducer;
