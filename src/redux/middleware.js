import { pokemonApiMiddleware } from "redux/slices/pokemon/pokemon";
import { userApiMiddleware } from "redux/slices/user/userApi";
import { roomApiMiddleware } from "redux/slices/room/roomApi";
import { appApiMiddleware } from "redux/slices/app/appApi";

const middleware = [pokemonApiMiddleware, userApiMiddleware, appApiMiddleware, roomApiMiddleware];

export default middleware;
