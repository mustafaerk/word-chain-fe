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
  isFinish: false,
  roomJoinError: ''
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    updateRoomId: (state, action) => {
      state.room.roomId = action.payload;
    },
    updateRoom: (state, action) => {
      state.room = action.payload;
    },
    updateOwner: (state, action) => {
      state.room.ownerId = action.payload;
    },
    updateRoomJoinError: (state, action) => {
      state.roomJoinError = action.payload;
    },
    updateRoomFinishStatus: (state, action) => {
      state.isFinish = action.payload;
    },
    clearRoom: (state) => {
      state.room = initialState.room;
    },
    updateWinnerUser: (state, action) => {
      state.winnerUser = action.payload;
    },
    updateRoomWords: (state, action) => {
      state.room.words = [...state.room.words, action.payload];
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
      state.room.isActive = false;
    },
  },
});

export const removeUserFromList = (userId) => {
  return async (dispatch, getState) => {
    const userList = getState().room.room.users;
    const newUserList = userList.filter(user => user.id !== userId);
    dispatch(changeUserList(newUserList))
  };
};

export const updatePointOfUser = (point, ownerId) => {
  return async (dispatch, getState) => {
    let userList = getState().room.room.users;
    const newList = userList.map((user) => ({
      ...user,
      point: user.id == ownerId ? user.point + point : user.point
    }));
    dispatch(changeUserList(newList))
  };
};

export const handleLeaveUser = (userId) => {
  return async (dispatch, getState) => {
    let userList = getState().room.room.users;
    userList = userList.map((user) => {
      return {
        ...user,
        isOnline: user.id == userId ? false : user.isOnline
      };
    })
    dispatch(changeUserList(userList));
  };
};

export const handleJoinUser = (joinedUser) => {
  return async (dispatch, getState) => {
    let userList = getState().room.room.users;
    const existUser = userList.find(user => user.id == joinedUser.id);
    if(existUser){
      userList = userList.map((user) => {
        return {
          ...user,
          isOnline: user.id == joinedUser.id ? true : user.isOnline
        };
      })
      dispatch(changeUserList(userList));
    }
    else{
      dispatch(updateUserList(joinedUser));
    }
    
  };
};

export const eliminateUser = (userId) => {
  return async (dispatch, getState) => {
    let userList = getState().room.room.users;
    userList = userList.map((user) => {
      return {
        ...user,
        isEliminated: user.id == userId ? true : user.isEliminated
      };
    })
    dispatch(changeUserList(userList));
  };
};


export const isFinishStatusSelector = (state) => state.room.isFinish;
export const wordListSelector = (state) => state.room.room.words;
export const winnerInfoSelector = (state) => state.room.winnerUser;
export const roomJoinErrorSelector = (state) => state.room.roomJoinError;
export const userListSelector = (state) => state.room.room.users.filter(user => user.isOnline);
export const isRoomStartedSelector = (state) => state.room.room.isStarted;
export const currentUserSelector = (state) => state.room.room.currentUserTurn;
export const currentUserInfoSelector = (state) => state.room.room.users.find(user => user.id == state.room.room.currentUserTurn);
export const roomOwnerSelector = (state) => state.room.room.users.find(user => user.id == state.room.room.ownerId);
export const roomIdSelector = (state) => state.room.room.roomId;
export const lastWordSelector = (state) => state.room.room.words[state.room.room.words.length - 1]?.word.toLowerCase() || '';

export const {
  updateLastWord,
  updateRoom,
  clearRoom,
  updateRoomWords,
  updateUserList,
  updateRoomJoinError,
  updateRoomFinishStatus,
  changeUserList,
  updateRoomStartStatus,
  changeUserTurn,
  updateWinnerUser,
  updateOwner,
  updateRoomId,
} = roomSlice.actions;

export const roomSliceReducer = roomSlice.reducer;
export const roomSliceReducerName = roomSlice.name;

export default roomSlice.reducer;
