import AppContext from "./AppContext";
import UserContext from "./UserContext";
export default interface WStore {
    appContext: AppContext;
    userContext: UserContext;
}
