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

const rootReducer = {
  [userReducerName]: userReducer,
  [pokemonApiReducerName]: pokemonApiReducer,
  [localizationReducerName]: localizationReducer,
  [appApiReducerName]: appApiReducer,
  [userApiReducerName]: userApiReducer,
};

export default rootReducer;
