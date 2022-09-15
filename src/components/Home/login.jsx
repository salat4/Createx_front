import { useState } from "react";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Form, Field } from "formik";
import login from "../../API/login";
import Svg from "../../images/symbol-defs.svg";
import { ButtonShowAndHide } from "./btnShow";
import { ShowRegModal } from "./showRegistrationModal";

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const defaultInitialValues = {
    email: "",
    password: "",
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const handleSubmit = () => {
    login(userEmail, userPwd);
    reset();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <p className="error-text">{message}</p>}
      />
    );
  };

  const reset = () => {
    setUserEmail("");
    setUserPwd("");
  };

  const Password = (e) => {
    setUserPwd(e.target.value);
  };

  const Email = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <>
      <div className="auth-container">
        <div className="auth-form__wraper">
          <h2 className="auth-title">Sign in</h2>
          <p className="auth-text">
            Sign in to your account using email and password provided during
            registration.
          </p>

          <Formik
            initialValues={defaultInitialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
          >
            <Form className="auth-form" autoComplete="off">
              <label className="auth-form__label" htmlFor="email">
                Email
                <FormError name="email" />
                <Field
                  className="auth-form__input"
                  name="email"
                  type="email"
                  placeholder="Your working email"
                  onInput={Email}
                  value={userEmail}
                />
              </label>
              <label className="auth-form__label" htmlFor="password">
                Password
                <FormError name="password" onInput={Password} />
                <ButtonShowAndHide />
              </label>
              <div className="auth-checkbox__section">
                <label className="auth-form__checkbox_label" htmlFor="keepData">
                  <input
                    className="auth-form__checkbox"
                    type="checkbox"
                    id="keepData"
                    name="keepData"
                    
                  />
                  Keep me signed in
                  <span className="checkmark"></span>
                </label>
                <p className="checkbox__section-text">Forgot password?</p>
              </div>
              <button className="gradient auth-btn" type="submit">
                Sign in
              </button>
            </Form>
          </Formik>
          <div className="auth-sign__section">
            <p className="auth-sign__text">Don't have an account?</p>
            <ShowRegModal/>
          </div>
        </div>
        <div className="auth__google">
          <p className="auth__google-text">Or sign in with</p>
          <svg className="auth__google-svg">
            <use href={`${Svg}#icon-google `} />
          </svg>
        </div>
      </div>
    </>
  );
}
