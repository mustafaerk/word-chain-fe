import io from "socket.io-client";

import { updateRoomWords } from "../room/roomSlice";

const socketMiddleware = () => {
    let socket = io.connect("http://localhost:3001");

    return (store) => (next) => (action) => {
        switch (action.type) {
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                console.log('websocket closed');
                break;
            case 'JOIN_ROOM':
                console.log(store.getState().user.userInfo)
                socket.emit("joinRoom", {
                    roomId: "d7e1dc4f-024c-49ff-ae3b-9c4d9fe331e1",
                    userId: store.getState().user.userInfo,
                });
                break;
            case 'NEW_MESSAGE':
                console.log('sending a message', action);
                socket.emit("gameMessage", {
                    action_type: "MESSAGE",
                    message: { word: action.payload, ownerId: store.getState().user.userInfo.id },
                    roomId: "d7e1dc4f-024c-49ff-ae3b-9c4d9fe331e1",
                });
                break;
            case 'LISTEN_ROOM':
                socket?.on('gameMessage', (data) => {
                    const body = { word: data.message.message.word, ownerId: data.message.message.ownerId };
                    store.dispatch(updateRoomWords(body))
                });
                break;
            default:
                return next(action);
        }
    };
};

export default socketMiddleware();