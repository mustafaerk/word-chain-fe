import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: { users: [], words: [] }
};

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {
        updateRoom: (state, action) => {
            state.room = action.payload;
        },
        updateRoomWords: (state, action) => {
            state.room.words = [state.room.words, ...action.payload];
        },
        updateUserList: (state, action) => {
            state.room.users = [state.room.users, ...action.payload];
        },
    },
});


export const { updateRoom } = roomSlice.actions;

export const roomSliceReducer = roomSlice.reducer;
export const roomSliceReducerName = roomSlice.name;

export default roomSlice.reducer;
