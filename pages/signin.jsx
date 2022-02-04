import React from 'react';
import Layout from '../components/Layout';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import style from '../styles/signup.module.scss';

const Signin = () => {

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });
  const initialValues = {
    email: '',
    password: ''
  };
  const renderError = (message) => <p className={style.isDanger}>{message}</p>;

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <div className={style.signup}>
            <div className={style.control}>
              <h1>Sing In</h1>

              <div className={style.field}>
                <div className={style.control}>
                  <Field
                    name="email"
                    type="text"
                    className="input"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" render={renderError} />
                </div>
              </div>
              <div className={style.field}>
                <div className={style.control}>
                  <Field
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" render={renderError} />
                </div>
              </div>

              <button type="submit" className="button is-primary">
                Sign In
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </Layout>
  );
};

export default Signin;
