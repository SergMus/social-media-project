import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return props.posts.map((item, index) => {
    return (
      <div className={styles.comment}>
        <div className={styles.user}>
          <img
            className={styles.avatar}
            src="https://cdn3.iconfinder.com/data/icons/social-media-special/256/duckduckgo-256.png"
            alt="avatar"
          />
          <div className={styles.name}>{props.posts[index].name}</div>
          <div className={styles.date}>{props.posts[index].date}</div>
        </div>
        <div className={styles.text}>{props.posts[index].text}</div>
        <div className={styles.activities}>
          <i className="far fa-thumbs-up"></i> {props.posts[index].likes}
          <i className="far fa-comment" style={{ margin: "0 12px" }}></i>
          <i className="fas fa-share-alt"></i>
        </div>
      </div>
    );
  });
};

export default Post;
