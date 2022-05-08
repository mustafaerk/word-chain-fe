import io from "socket.io-client";

import {
  updateUserList,
  removeUserFromList,
  updateRoomWords,
  updateRoomStartStatus,
  eliminateUserFromList,
  updateWinnerUser,
  updatePointOfUser
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
      case "START_ROOM":
        socket.emit("start", { status: true });
        break;
      case "END_ROOM":
        socket.emit("gameFinish", { status: true });
        break;
      case "ELIMINATE_USER":
        socket.emit("eliminate", {
          roomId: store.getState().room.room.roomId,
          user: store.getState().user.userInfo,
          nextUserId: action.payload
        });
        break;
      case "FINISH_GAME":
        socket.emit("gameFinish", {
          roomId: store.getState().room.room.roomId,
          winner: action.payload
        });
        break;
      case "NEW_MESSAGE":
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
          store.dispatch(updateUserList({ ...data.user, isEliminated: false }));
        });

        socket.on("leave", (data) => {
          store.dispatch(removeUserFromList(data.message.user));
        });

        socket.on("eliminate", (data) => {
          store.dispatch(eliminateUserFromList(data.message.user.id, data.message.nextUserId));
        });

        socket.on("gameFinish", (data) => {
          console.log(data)
          store.dispatch(updateWinnerUser(data.message.winner));
        });

        socket?.on("start", (data) => {
          store.dispatch(updateRoomStartStatus(data.message.status));
        });

        socket?.on("gameMessage", (data) => {
          console.log(data)
          const word = {
            word: data.message.message.word,
            ownerId: data.message.message.ownerId,
            point: data.point,
          };
          store.dispatch(updateRoomWords({ word, nextUserId: data.nextUserId }));
          store.dispatch(updatePointOfUser(data.point, data.message.message.ownerId));
        });
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
