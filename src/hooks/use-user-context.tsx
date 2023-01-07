import { useSelector } from "react-redux";
import { UserContext, WStore } from "../store";

export const useUserContext = (): UserContext => useSelector((state: WStore) => state.userContext);