import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useLoginMutation } from '../redux/authOperation';
import { Form, Field } from "formik";


export default function LoginPage() {
    const [login] = useLoginMutation();
  
    const defaultInitialValues = {
      email: '',
      password: '',
    };
  
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
    });
  
    const handleSubmit = (values, { resetForm }) => {
      login(values);
      resetForm();
    };
  
    const FormError = ({ name }) => {
      return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
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
            <Field name="email" type="email" placeholder="Enter email" />
            <FormError name="email" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="Enter password" />
            <FormError name="password" />
            <button type="submit"> Log in</button>
          </Form>
        </Formik>
      </>
    );
  }