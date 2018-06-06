import UserContext from './models';
declare const Actions: {
    login: (payload: UserContext) => {
        type: "userContext/LOGIN";
        payload: UserContext;
    };
    logout: () => {
        type: "userContext/LOGOUT";
    };
};
export default Actions;
