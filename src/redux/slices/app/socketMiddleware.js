import io from "socket.io-client";

import {
  updateUserList,
  removeUserFromList,
  updateRoomWords
} from "../room/roomSlice";

const socketMiddleware = () => {
  let socket = io.connect("http://localhost:3001");

  return (store) => (next) => (action) => {
    switch (action.type) {
      case "WS_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log("websocket closed");
        break;
      case "LEAVE_ROOM":
        socket.emit("leave", {
          roomId: store.getState().room.room.roomId,
          user: store.getState().user.userInfo,
        });
        break;
      case "JOIN_ROOM":
        socket.emit("joinRoom", {
          roomId: store.getState().room.room.roomId,
          user: store.getState().user.userInfo,
        });
        break;
      case "NEW_MESSAGE":
        console.log("sending a message", action);
        socket.emit("gameMessage", {
          action_type: "MESSAGE",
          message: {
            word: action.payload,
            ownerId: store.getState().user.userInfo.id,
          },
          roomId: store.getState().room.room.roomId,
        });
        break;
      case "LISTEN_ROOM":
        socket.on("join", (data) => {
          store.dispatch(updateUserList(data.user));
        });
        socket.on("leave", (data) => {
          store.dispatch(removeUserFromList(data.message.user));
        });
        socket?.on("gameMessage", (data) => {
          const word = {
            word: data.message.message.word,
            ownerId: data.message.message.ownerId,
          };
          store.dispatch(updateRoomWords({ word, nextUserId: data.nextUserId }));
        });
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
