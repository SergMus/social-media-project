import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setTotalUsersCount,
  getCurrentUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import { setDisabledBtn } from "./../../redux/users-reducer";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getIsDisabled,
} from "./../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getCurrentUsers(this.props.currentPage, this.props.pageSize);
  }

  onChangePage = (pageNumber) => {
    this.props.getCurrentUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            isDisabled={this.props.isDisabled}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isDisabled: getIsDisabled(state),
  };
};
// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     isDisabled: state.usersPage.isDisabled,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setTotalUsersCount: (count) => {
//       dispatch(setTotalCountAC(count));
//     },
//     setCurrenPage: (page) => {
//       dispatch(setCurrentPageAC(page));
//     },
//     setFetchLoader: (isFetch) => {
//       dispatch(setFetchLoaderAC(isFetch));
//     },
//   };
// };
// console.log(mapDispatchToProps());

export default connect(mapStateToProps, {
  unFollow,
  follow,
  setTotalUsersCount,
  setDisabledBtn,
  getCurrentUsers,
})(UsersContainer);
