import { useState } from "react";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Form, Field } from "formik";
import login from "../../API/login";
import Svg from "../../images/symbol-defs.svg";
import { ButtonShowAndHide } from "./btnShow";
import RegisterPage from "./registration";
import Backdrop from "../Backdrop";

export default function LoginPage({
  onClick,
  showRegistrationForm,
  modalRegistration,
}) {
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

  const handleSubmit = async () => {
    const prew = await login(userEmail, userPwd);
    sessionStorage.setItem("user", JSON.stringify({ ...prew }));

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
      <div id="login" className="modal-container ">
        <div className="modal-form__wraper">
          <h2 className="auth-title">Sign in</h2>
          <p className="auth-text">
            Sign in to your account using email and password provided during
            registration.
          </p>
          <button onClick={onClick} className="btn-close">
            <svg width="24" height="24">
              <use href={`${Svg}#icon-close `} />
            </svg>
          </button>

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

              <button className="gradient auth-btn" type="submit">
                Sign in
              </button>
            </Form>
          </Formik>
          <div className="auth-sign__section">
            <p className="auth-sign__text">Don't have an account?</p>
            <button
              type="button"
              className="header-button__auth"
              onClick={showRegistrationForm}
            >
              Register
            </button>
            {modalRegistration && (
              <Backdrop onClick={showRegistrationForm}>
                <RegisterPage />
              </Backdrop>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
