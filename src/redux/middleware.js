import { userApiMiddleware } from "redux/slices/user/userApi";
import { roomApiMiddleware } from "redux/slices/room/roomApi";
import { appApiMiddleware } from "redux/slices/app/appApi";
import socketMiddleware from "redux/slices/app/socketMiddleware";

const middleware = [userApiMiddleware, appApiMiddleware, roomApiMiddleware, socketMiddleware];

export default middleware;
