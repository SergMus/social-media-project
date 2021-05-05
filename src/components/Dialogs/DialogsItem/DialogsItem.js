import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div>
      <NavLink to={path}>
        <div className={styles.person}>
          <img className={styles.image} src={props.icon} alt="icon" />
          <span>{props.name}</span>
        </div>
      </NavLink>
    </div>
  );
};

export default DialogsItem;
