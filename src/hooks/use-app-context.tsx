import { useSelector } from "react-redux";
import { AppContext, WStore } from "../store";

export const useAppContext = (): AppContext => useSelector((state: WStore) => state.appContext);