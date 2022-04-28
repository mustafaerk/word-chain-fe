import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: {
        roomAvatarId: "",
        roomSize: "",
        roomName: "",
        isPublic: false,
    },
    selectedRoomId: "",
};

export const createRoomSlice = createSlice({
    name: "createroom",
    initialState,
    reducers: {
        updateRoomField: (state, action) => {
            state.room[action.payload.field] = action.payload.value;
        },
        updateRoomId: (state, action) => {
            state.selectedRoomId = action.payload;
        },
    },
});


export const createRoomInfo = (state) => state.createroom.room;
export const selectedRoomIdSelector = (state) => state.createroom.selectedRoomId;

export const { updateRoomField, updateRoomId } = createRoomSlice.actions;

export const createRoomSliceReducer = createRoomSlice.reducer;
export const createRoomSliceReducerName = createRoomSlice.name;

export default createRoomSlice.reducer;
