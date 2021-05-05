import { authorize } from "./auth-reducer";

const SET_INITIALIZE = "SET-INITIALIZE";

let initialState = {
  initial: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZE:
      return {
        ...state,
        initial: true,
      };
    default:
      return state;
  }
};

export const setInitializer = () => ({
  type: SET_INITIALIZE,
});
export const initializerApp = () => (dispatch) => {
  let promise = dispatch(authorize());
  promise.then(() => {
    dispatch(setInitializer());
  });
};

export default appReducer;
