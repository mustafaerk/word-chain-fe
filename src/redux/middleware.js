import { userApiMiddleware } from "redux/slices/user/userApi";
import { roomApiMiddleware } from "redux/slices/room/roomApi";
import socketMiddleware from "redux/slices/app/socketMiddleware";

const middleware = [userApiMiddleware, roomApiMiddleware, socketMiddleware];

export default middleware;
