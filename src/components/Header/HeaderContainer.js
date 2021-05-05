import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth, logout } from "./../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, {
  setUserAuth,
  logout,
})(HeaderContainer);
