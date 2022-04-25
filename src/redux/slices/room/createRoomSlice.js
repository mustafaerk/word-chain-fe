import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    room: {
        roomAvatarId: "",
        roomSize: "",
        roomName: "",
        isPublic: false,
    }
};

export const createRoomSlice = createSlice({
    name: "createroom",
    initialState,
    reducers: {
        updateRoomField: (state, action) => {
            state.room[action.payload.field] = action.payload.value;
        },
    },
});


export const { updateRoomField } = createRoomSlice.actions;
export const createRoomInfo = (state) => state.createroom.room;

export const createRoomSliceReducer = createRoomSlice.reducer;
export const createRoomSliceReducerName = createRoomSlice.name;

export default createRoomSlice.reducer;
