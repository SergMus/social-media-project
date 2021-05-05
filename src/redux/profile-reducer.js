import { profileAPI } from "./../api/profileApi";

const ADD_POST_TO_ARRAY = "ADD-POST-TO-ARRAY";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  posts: [
    {
      name: "John Doe",
      text: "first post",
      date: "19:30 - 20 Марта 2021",
      likes: "2",
    },
    {
      name: "John Doe",
      text: "second one post",
      date: "14:32 - 22 Марта 2021",
      likes: "4",
    },
  ],
  profile: {},
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST-TO-ARRAY": {
      let date = new Date();
      let time =
        date.getHours() +
        ":" +
        date.getMinutes() +
        " - " +
        date.getDate() +
        "." +
        date.getMonth() +
        "." +
        date.getFullYear();
      let newPost = {
        name: "John Doe",
        text: action.values,
        date: time,
        likes: "",
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "SET-STATUS":
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostToArrayCreator = (values) => {
  return { type: ADD_POST_TO_ARRAY, values };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getUser(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};
export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
