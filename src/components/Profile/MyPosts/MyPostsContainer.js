import React from "react";
import { connect } from "react-redux";
import { addPostToArrayCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapStateToDispatch = (dispatch) => {
  return {
    addPostToArray: (values) => {
      let action = addPostToArrayCreator(values);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapStateToDispatch)(MyPosts);

export default MyPostsContainer;
