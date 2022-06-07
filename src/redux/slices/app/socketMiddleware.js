import io from "socket.io-client";
import { API_URL } from "constant/Varible";

import {
  updateRoom,
  changeUserTurn,
  handleLeaveUser,
  updateRoomJoinError,
  updateRoomFinishStatus,
  updateRoomWords,
  updateRoomStartStatus,
  eliminateUser,
  updateWinnerUser,
  updatePointOfUser,
  updateOwner,
  handleJoinUser
} from "../room/roomSlice";

const socketMiddleware = () => {
  let socket = io.connect(API_URL);

  return (store) => (next) => (action) => {
    switch (action.type) {
      case "WS_DISCONNECT":
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;

      case "QUICK_JOIN":
        socket.emit("quickJoin", {
          user: store.getState().user.userInfo,
        });
        break;

      case "CREATE_ROOM":
        socket.emit("createRoom", {
          user: store.getState().user.userInfo,
          room: store.getState().createroom.room,
        });
        break;

      case "JOIN_ROOM":
        socket.emit("join", {
          roomId: store.getState().room.room.roomId,
          user: store.getState().user.userInfo,
        });
        break;


      case "START_ROOM":
        socket.emit("start");
        break;

      case "SEND_WORD":
        socket.emit("word", action.payload);
        break;

      case "TIME_UP":
        socket.emit("timeUp");
        break;

      case "LEAVE_ROOM":
        socket.emit("leave");
        break;

      case "LISTEN_ROOM":
        socket.on("room", (room) => {
          store.dispatch(updateRoom(room));
          // Update Redux room
        });


        socket.on("join", (user) => {
          store.dispatch(handleJoinUser(user));
          // push the user to room userList;
        });

        socket.on("leave", (userId) => {
          store.dispatch(handleLeaveUser(userId));
          // push the user to room userList;
        });

        socket.on("start", () => {
          store.dispatch(updateRoomStartStatus(true));
          // Update room isStarted field to true and start the game
        });

        socket.on("word", (data) => {
          store.dispatch(updateRoomWords(data.word));
          store.dispatch(updatePointOfUser(data.pointOfWord, data.word.ownerId));
          // Update wordList of room and update User Point;
        });

        socket.on("owner", (newOwnerId) => {
          store.dispatch(updateOwner(newOwnerId));
          // Update  update room info for newRoom ;
        });

        socket.on("turn", (nextUserId) => {
          store.dispatch(changeUserTurn(nextUserId));
          // Update currentUserId for turn;
        });

        socket.on("eliminate", (eliminatedUserId) => {
          store.dispatch(eliminateUser(eliminatedUserId));
          // Update eliminate which has eliminatedUserId ;
        });

        socket.on("winner", (winnerUser) => {
          store.dispatch(updateWinnerUser(winnerUser));
          // Update  winnerSlice with winnerUser and show it on modal when modal close winner info must clear ;
        });


        socket.on("finish", (newRoom) => {
          store.dispatch(updateRoomFinishStatus(true));
          store.dispatch(updateRoom(newRoom));
          // Update  update room info for newRoom ;
        });

        socket.on("notJoined", (data) => {
          store.dispatch(updateRoomJoinError(data.message));
          // show Error Modal and not navigate;
        });



        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
