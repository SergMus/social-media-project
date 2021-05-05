import React from "react";
import styles from "./input.module.css";

export const RenderField = ({
  input,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <input
        className={touched && (error || warning) ? styles.err : ""}
        type={type}
        {...input}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};
