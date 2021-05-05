import React from "react";
import Dialogs from "./Dialogs";
import { addMessageToArrayCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapStateToDispatch = (dispatch) => {
  return {
    addMessageToArray: (values) => {
      let action = addMessageToArrayCreator(values);
      dispatch(action);
    },
  };
};

export default compose(
  connect(mapStateToProps, mapStateToDispatch),
  withAuthRedirect
)(Dialogs);
