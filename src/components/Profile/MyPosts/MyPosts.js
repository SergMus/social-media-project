import React from "react";
import { reduxForm, Field } from "redux-form";
import { RenderField } from "../../../common/FormControls/textArea";
import { maxLength10, required } from "../../../utils/validators";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  const addPost = (values) => {
    props.addPostToArray(values.postsTxtArea);
  };
  return (
    <div>
      <div className={styles.myposts}>
        <div className={styles.title}>Мои посты</div>
        <TextAreaRedux onSubmit={addPost} styles={styles.btn} />
      </div>

      {<Post posts={props.profilePage.posts} />}
    </div>
  );
});

const TextArea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Поделитесь с нами мыслями..."
        name="postsTxtArea"
        component={RenderField}
        type="textarea"
        label="type post here..."
        validate={[required, maxLength10]}
      />
      <div className={props.styles}>
        <button>Добавить</button>
      </div>
    </form>
  );
};

const TextAreaRedux = reduxForm({
  form: "myPosts",
})(TextArea);

export default MyPosts;
