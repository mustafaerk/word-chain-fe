import { pokemonApiMiddleware } from "redux/slices/pokemon/pokemon";
import { userApiMiddleware } from "redux/slices/user/userApi";
import { appApiMiddleware } from "redux/slices/app/appApi";

const middleware = [pokemonApiMiddleware, userApiMiddleware, appApiMiddleware];

export default middleware;
