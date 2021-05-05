import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { reduxForm, Field } from "redux-form";
import { RenderField } from "../../common/FormControls/input";
import { login } from "./../../redux/auth-reducer";
import { required } from "./../../utils/validators";
import styles from "./login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="email">Login</label>
        <Field
          type="text"
          placeholder="email"
          name="email"
          component={RenderField}
          validate={[required]}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field
          type="text"
          placeholder="password"
          name="password"
          component={RenderField}
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={RenderField} />
        <label htmlFor="rememberMe">запомнить</label>
      </div>
      <div>
        <button type="submit">Log in</button>
        {props.error && <span className={styles.formError}>{props.error}</span>}
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const submit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <h2>Войти</h2>
      <LoginReduxForm onSubmit={submit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
