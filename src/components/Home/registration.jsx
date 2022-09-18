import { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Form, Field } from "formik";
import registration from "../../API/registration";
import Svg from "../../images/symbol-defs.svg";
import { ButtonShowAndHide } from "./btnShow";
import Backdrop from "../Backdrop";
import LoginPage from "./login";

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [type, setType] = useState("password");

  const reset = () => {
    setUserName("");
    setUserEmail("");
    setUserPwd("");
  };

  const handleSubmit = async () => {
    console.log(userName);
    registration(userName, userEmail, userPwd);
    reset();
  };

  const defaultInitialValues = {
    name: "",
    email: "",
    password: "",
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    repeated_password: yup
      .string()
      .oneOf([yup.ref("password")], "both passwords need to be the same")
      .required("is required field"),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <p className="error-text">{message}</p>}
      />
    );
  };


  const [modalLogin, setModalLogin] = useState(false);

  const showLoginForm = () => {
    setModalLogin(!modalLogin);
    const log = document.querySelector('#login')
    log.className.add('none')
  };



  const Password = (e) => {
    setUserPwd(e.target.value);
  };

  const Email = (e) => {
    setUserEmail(e.target.value);
  };

  const Name = (e) => {
    setUserName(e.target.value);
  };

  const showHide = () => {
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };

  return (
    <div id="reg" className="modal-container r">
      <div className="modal-form__wraper">
        <h2 className="auth-title">Sign up</h2>
        <p className="auth-text">
          Registration takes less than a minute but gives you full control over
          your studying.
        </p>
        <Formik
          initialValues={defaultInitialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form className="auth-form" autoComplete="off">
            <label className="auth-form__label" htmlFor="name">
              Full Name
              <FormError name="name" />
              <Field
                className="auth-form__input"
                name="name"
                type="text"
                placeholder="Your full name"
                onInput={Name}
                value={userName}
              />
            </label>
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
              <FormError name="password" />
              <ButtonShowAndHide value={userPwd} onInput={Password} />
            </label>
            <label className="auth-form__label" htmlFor="repeated_password">
              Confirm Password
              {type === "input" ? (
                <svg onClick={showHide} className="show-btn">
                  <use href={`${Svg}#icon-eye-close `} />
                </svg>
              ) : (
                <svg onClick={showHide} className="hide-btn">
                  <use href={`${Svg}#icon-eye `} />
                </svg>
              )}
              <FormError name="repeated_password" />
              <Field
                className="auth-form__input"
                id="repeated_password"
                name="repeated_password"
                type={type}
                placeholder="•••••••••••"
              />
            </label>
            <div className="auth-checkbox__section">
              <label className="auth-form__checkbox_label" htmlFor="keepData">
                <Field
                  className="auth-form__checkbox"
                  type="checkbox"
                  id="keepData"
                  name="keepData"
                  
                />
                Remember me
                <span className="checkmark"></span>
              </label>
            </div>
            <button className="gradient auth-btn" type="submit">
              Sign up
            </button>
          </Form>
        </Formik>
        <div className="auth-sign__section">
          <p className="auth-sign__text">Already have an account?</p>

          <button
        className="header-button__auth"
        onClick={showLoginForm}
      >
        Log in
      </button>
      {modalLogin && (
        <Backdrop onClick={showLoginForm}>
          <LoginPage />
        </Backdrop>
      )}

        </div>
        <div className="auth__google">
          <p className="auth__google-text">Or sign in with</p>
          <svg className="auth__google-svg">
            <use href={`${Svg}#icon-google `} />
          </svg>
        </div>
      </div>
    </div>
  );
}
