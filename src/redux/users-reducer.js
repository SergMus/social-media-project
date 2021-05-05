import { usersAPI } from "./../api/usersApi";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_FETCH_LOADER = "SET_FETCH_LOADER";
const SET_DISABLED_BTN = "SET-DISABLED_BTN";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: "",
  currentPage: 1,
  isFetching: false,
  isDisabled: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.userId) {
            return { ...item, followed: true };
          }
          return item;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.userId) {
            return { ...item, followed: false };
          }
          return item;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_FETCH_LOADER:
      return {
        ...state,
        isFetching: action.isFetch,
      };
    case SET_DISABLED_BTN:
      return {
        ...state,
        isDisabled: action.toggle
          ? [...state.isDisabled, action.userId]
          : state.isDisabled.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_COUNT,
  count,
});
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setFetchLoader = (isFetch) => ({
  type: SET_FETCH_LOADER,
  isFetch,
});
export const setDisabledBtn = (toggle, userId) => ({
  type: SET_DISABLED_BTN,
  toggle,
  userId,
});
export const getCurrentUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setFetchLoader(true));
    usersAPI.getUsersOnLoad(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setFetchLoader(false));
    });
  };
};
export const unFollow = (userId) => {
  return (dispatch) => {
    dispatch(setDisabledBtn(true, userId));
    usersAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollowSuccess(userId));
      }
      dispatch(setDisabledBtn(false, userId));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setDisabledBtn(true, userId));
    usersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(setDisabledBtn(false, userId));
    });
  };
};

export default usersReducer;
