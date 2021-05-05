import React, { Component } from "react";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/login";
import { connect } from "react-redux";
import { initializerApp } from "./redux/app-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "./common/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializerApp();
  }
  render() {
    if (!this.props.initial) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    initial: state.app.initial,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializerApp })
)(App);
