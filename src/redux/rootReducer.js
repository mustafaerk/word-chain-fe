import { userReducer, userReducerName } from "redux/slices/user/userSlice";
import {
  localizationReducer,
  localizationReducerName,
} from "redux/slices/app/localizationSlice";
import {
  pokemonApiReducer,
  pokemonApiReducerName,
} from "redux/slices/pokemon/pokemon";
import { userApiReducer, userApiReducerName } from "redux/slices/user/userApi";
import { appApiReducer, appApiReducerName } from "redux/slices/app/appApi";
import { appSliceReducer, appSliceReducerName } from "redux/slices/app/appSlice";
import { roomSliceReducer, roomSliceReducerName } from "redux/slices/room/roomSlice";
import { roomApiReducer, roomApiReducerName } from "redux/slices/room/roomApi";
import { createRoomSliceReducer, createRoomSliceReducerName } from "redux/slices/room/createRoomSlice";

const rootReducer = {
  [userReducerName]: userReducer,
  [pokemonApiReducerName]: pokemonApiReducer,
  [localizationReducerName]: localizationReducer,
  [appApiReducerName]: appApiReducer,
  [userApiReducerName]: userApiReducer,
  [appSliceReducerName]: appSliceReducer,
  [roomSliceReducerName]: roomSliceReducer,
  [roomApiReducerName]: roomApiReducer,
  [createRoomSliceReducerName]: createRoomSliceReducer,
};

export default rootReducer;
