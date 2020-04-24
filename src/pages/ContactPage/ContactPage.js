import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Formik } from 'formik';
import { object } from 'yup';
import { validators } from 'constants/validators';
import ROUTES from 'constants/route-constants';
import useErrorHandler from 'context/notifications/useErrorHandler';

import Button from 'components/Button';
import InputField from 'components/InputField/InputField';
import CheckboxField from 'components/CheckboxField/CheckboxField';

import { LayoutContainer } from 'components/layout';

import { Container, Form, Overlay } from './styled';

const validationSchema = object().shape({
  firstName: validators.firstName,
  email: validators.email,
  message: validators.message,
  termsAccepted: validators.termsAccepted,
});

const initialValues = {
  firstName: '',
  email: '',
  message: '',
  termsAccepted: false,
};

const ContactPage = () => {

  const handleError = useErrorHandler();

  const handleSubmit = (values) => {
    axios.post('https://hooks.zapier.com/hooks/catch/7342232/o5eq5s1/', {
      name: values.firstName,
      email: values.email,
      message: values.message
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        handleError(error);
      });
  };

  return (
    <LayoutContainer centered={true}>
      <Container>
        <Overlay />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} action="https://hooks.zapier.com/hooks/catch/7342232/o5eq5s1/" method="post">
              <InputField
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                placeholder="Enter your first name"
                errors={errors.firstName && touched.firstName && errors.firstName}
              />
              <InputField
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Enter your email"
                errors={errors.email && touched.email && errors.email}
              />

              <InputField
                name="message"
                as="textarea"
                onChange={handleChange}
                value={values.message}
                placeholder="Write me a message!"
                errors={errors.message && touched.message && errors.message}
              />

              <CheckboxField
                name="termsAccepted"
                type="checkbox"
                value={values.termsAccepted}
                errors={errors.termsAccepted && touched.termsAccepted && errors.termsAccepted}
              >I accept <Link to={ROUTES.TERMS}>terms of service</Link>
              </CheckboxField>

              <Button isDark={true} as="button" type="submit">
                Send it to meee!
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </LayoutContainer>
  );
};

export default ContactPage;
