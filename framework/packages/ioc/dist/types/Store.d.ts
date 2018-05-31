import AppContext from "./AppContext";
import UserContext from "./UserContext";
export default interface Store {
    appContext: AppContext;
    userContext: UserContext;
}
