import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import { useRegisterMutation } from "../redux/authOperation";
import { Form, Field } from "formik";

export default function RegisterPage() {
  const [register] = useRegisterMutation();

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

  const handleSubmit = (values, { resetForm }) => {
    register(values);
    resetForm();
  };

  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={(message) => <p>{message}</p>} />;
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
          <Field name="name" type="text" placeholder="Enter your name" />
          <FormError name="name" />
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="Enter your e-mail" />
          <FormError name="email" />
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <FormError name="password" />
          <button type="submit"> Create!</button>
        </Form>
      </Formik>
    </>
  );
}
