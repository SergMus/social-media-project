import React from "react";
import styles from "./Users.module.css";
import avatar from "./../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page ? styles.active : ""}
              onClick={() => props.onChangePage(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((item) => {
        return (
          <div className={styles.wrapper} key={item.id}>
            <div className={styles.userInfo}>
              <div>
                <NavLink to={"/profile/" + item.id}>
                  <img
                    className={styles.image}
                    src={item.photos.small != null ? item.photos.small : avatar}
                    alt=""
                  />
                </NavLink>
              </div>
              {item.followed ? (
                <button
                  disabled={props.isDisabled.some((id) => id === item.id)}
                  onClick={() => {
                    props.unFollow(item.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.isDisabled.some((id) => id === item.id)}
                  onClick={() => {
                    props.follow(item.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
            <div className={styles.userStatus}>
              <div>{item.name}</div>
              <div>{item.status}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
