import { useState } from "react";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import { Form, Field } from "formik";
import login from "../API/login";

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
    return <ErrorMessage name={name} render={(message) => <p>{message}</p>} />;
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
      <p>Log in to your account!</p>

      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter email"
            onInput={Email}
            value={userEmail}
          />
          <FormError name="email" />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            placeholder="Enter password"
            onInput={Password}
            value={userPwd}
          />
          <FormError name="password" />
          <button type="submit"> Log in</button>
        </Form>
      </Formik>
    </>
  );
}
