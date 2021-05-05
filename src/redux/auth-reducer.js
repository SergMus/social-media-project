import { stopSubmit } from "redux-form";
import { headerAPI } from "./../api/headerApi";

const SET_USER_AUTH = "SET-USER-AUTH";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET-USER-AUTH":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export const setUserAuth = (userId, email, login, isAuth) => ({
  type: SET_USER_AUTH,
  data: { userId, email, login, isAuth },
});
export const authorize = () => {
  return (dispatch) => {
    return headerAPI.getUser().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserAuth(id, email, login, true));
      }
    });
  };
};
export const login = (email, login, rememberMe) => {
  return (dispatch) => {
    headerAPI.login(email, login, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(authorize());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "something goes wrong!";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    headerAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuth(null, null, null, false));
      }
    });
  };
};

export default authReducer;
