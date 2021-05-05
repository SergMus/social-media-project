import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const addMessage = (values) => {
    props.addMessageToArray(values.dialogsTxtarea);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Dialogs</h2>
      <div className={styles.dialogs}>
        <div className={styles.dialogsList}>
          {props.dialogsPage.persons.map((item) => {
            return (
              <DialogsItem name={item.name} id={item.id} icon={item.icon} />
            );
          })}
        </div>
        <div className={styles.messagesList}>
          {props.dialogsPage.messages.map((item) => {
            return <Message text={item.text} />;
          })}

          <DialogsTextareaRedux
            messArea={props.dialogsPage.messArea}
            onSubmit={addMessage}
          />
        </div>
      </div>
    </div>
  );
};

const DialogsTextarea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name="dialogsTxtarea"
          placeholder="Добавьте сообщение"
          component="textarea"
          value={props.messArea}
        ></Field>
        <div>
          <button>Добавить</button>
        </div>
      </div>
    </form>
  );
};

const DialogsTextareaRedux = reduxForm({
  form: "dialogsTextarea",
})(DialogsTextarea);

export default Dialogs;
