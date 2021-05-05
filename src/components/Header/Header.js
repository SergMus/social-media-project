import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className="header">
      <img
        className={styles.image}
        src="https://cdn4.iconfinder.com/data/icons/bettericons/354/github-circle-256.png"
        alt="logo"
      />
      <div className={styles.authorize}>
        {props.auth.isAuth ? (
          <>
            <div> Добрый день, {props.auth.login} </div>
            <button onClick={props.logout}>Выйти</button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
