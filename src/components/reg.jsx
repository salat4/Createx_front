import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { Form, Field } from "formik";
import axios from "axios";
import { useState } from "react";

export default function RegisterPage() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const reset = () => {
    setUserName("");
    setUserEmail("");
    setUserPwd("");
  };

  const handleSubmit = async () => {
    try {
      const registration = await axios.post(
        "https://createx1.herokuapp.com/createx/auth/register",
        { name: userName, email: userEmail, password: userPwd }
      );
      reset()
      console.log(JSON.stringify(registration?.data));
    } catch (error) {
      console.log(error);
    }
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
  });

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={(message) => <p>{message}</p>} />;
  };

  const Pass = (e) => {
    setUserPwd(e.target.value);
  };

  const Em = (e) => {
    setUserEmail(e.target.value);
  };

  const Na = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <p>Create your account!</p>
      <Formik
        initialValues={defaultInitialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            type="text"
            placeholder="Enter your name"
            onInput={Na}
            value={userName}
          />
          <FormError name="name" />
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your e-mail"
            onInput={Em}
            value={userEmail}

          />
          <FormError name="email" />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
            onInput={Pass}
            value={userPwd}

          />
          <FormError name="password" />
          <button type="submit"> Create!</button>
        </Form>
      </Formik>
    </>
  );
}
