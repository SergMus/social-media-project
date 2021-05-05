import React from "react";
import Preloader from "../../../common/Preloader";
// import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.profileInfo}>
      {/*Мой профайл*/}
      {/* {!props.profile.photos.large ? (
        <h3>Please, load photo!</h3>
      ) : (
        <img
          className={styles.image}
          src={props.profile.photos.large}
          alt="car"
        />
      )} */}
      <ProfileStatusWithHooks
        status={props.status}
        updateUserStatus={props.updateUserStatus}
      />

      {/* Пользователи с сервера */}
      {props.profile.fullName}
      {/* <img
        className={styles.image}
        src={props.profile.photos.small}
        alt="car"
      /> */}
    </div>
  );
};

export default ProfileInfo;
