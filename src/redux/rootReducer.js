import { userReducer, userReducerName } from "redux/slices/user/userSlice";
import {
  localizationReducer,
  localizationReducerName,
} from "redux/slices/app/localizationSlice";
import {
  pokemonApiReducer,
  pokemonApiReducerName,
} from "redux/slices/pokemon/pokemon";

const rootReducer = {
  [userReducerName]: userReducer,
  [pokemonApiReducerName]: pokemonApiReducer,
  [localizationReducerName]: localizationReducer,
};

export default rootReducer;
