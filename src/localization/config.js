import StringList from "./string.json";
import { useSelector } from "react-redux";

export const getString = (key) => {
  const crrLang = useSelector((state) => state.localization.lang);
  const trm = StringList[crrLang][key];
  return trm;
};
