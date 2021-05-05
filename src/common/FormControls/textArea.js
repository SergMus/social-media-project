import React from "react";
import styles from "./textArea.module.css";

export const RenderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <textarea
        className={touched && (error || warning) ? styles.err : ""}
        placeholder={label}
        type={type}
        {...input}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};
