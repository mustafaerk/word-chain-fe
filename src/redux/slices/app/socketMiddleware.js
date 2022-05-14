import io from "socket.io-client";

import {
  updateUserList,
  updateRoom,
  changeUserTurn,
  removeUserFromList,
  updateRoomJoinError,
  updateRoomFinishStatus,
  updateRoomWords,
  updateRoomStartStatus,
  eliminateUser,
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

      case "NEW_MESSAGE":
        socket.emit("word", {
          word: action.payload,
        });
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
          console.log(room);
          // Update Redux room
        });


        socket.on("join", (user) => {
          console.log(user);
          store.dispatch(updateUserList(user));
          // push the user to room userList;
        });

        socket.on("leave", (userId) => {
          console.log(userId);
          store.dispatch(removeUserFromList(userId));
          // push the user to room userList;
        });

        socket.on("start", (data) => {
          console.log(data);
          store.dispatch(updateRoomStartStatus(true));
          // Update room isStarted field to true and start the game
        });

        socket.on("word", (data) => {
          console.log(data.word, data.pointOfWord);
          store.dispatch(updateRoomWords(true));
          store.dispatch(updatePointOfUser(data.pointOfWord, data.word.ownerId));
          // Update wordList of room and update User Point;
        });

        socket.on("turn", (nextUserId) => {
          console.log(nextUserId);
          store.dispatch(changeUserTurn(nextUserId));
          // Update currentUserId for turn;
        });

        socket.on("eliminate", (eliminatedUserId) => {
          console.log(eliminatedUserId);
          store.dispatch(eliminateUser(eliminatedUserId));
          // Update eliminate which has eliminatedUserId ;
        });

        socket.on("winner", (winnerUser) => {
          console.log(winnerUser);
          store.dispatch(updateWinnerUser(winnerUser));
          // Update  winnerSlice with winnerUser and show it on modal when modal close winner info must clear ;
        });


        socket.on("finish", (newRoom) => {
          console.log(newRoom);
          store.dispatch(updateRoomFinishStatus(true));
          store.dispatch(updateRoom(newRoom));
          // Update  update room info for newRoom ;
        });



        socket.on("notJoined", (data) => {
          console.log(data.message);
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
