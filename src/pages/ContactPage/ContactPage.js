/* eslint-disable no-undef */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { object } from 'yup';
import { validators } from 'constants/validators';
import ROUTES from 'constants/route-constants';
import useErrorHandler from 'context/notifications/useErrorHandler';

import Button from 'components/Button';
import InputField from 'components/InputField/InputField';
import CheckboxField from 'components/CheckboxField/CheckboxField';
import { Highlight, SubTitle } from 'components/layout';
import { Spinner } from 'components/Loader/styled';

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleError = useErrorHandler();

  const handleSubmit = ( values) => {
    setIsLoading(true);

    let templateParams = {
      email: values.email,
      name: values.firstName,
      message_html: values.message,
    };

    emailjs.send(
      'gmail',
      process.env.REACT_APP_TEMPLATE,
      templateParams,
      process.env.REACT_APP_USER
    )
      .then(() => {
        setIsLoading(false);
        setIsSent(true);
        setSubmitting(false);
      })
      .catch(err => {
        handleError(err);
        setIsLoading(false);
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
            <>
              {isSent ? (
                <SubTitle>
                  <Highlight>고마워요</Highlight>
                  Thank You for contacting me! 
                </SubTitle>
              ) : (
                <Form onSubmit={handleSubmit}>
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
                  >I accept all the <Link to={ROUTES.TERMS}>terms of service</Link>
                  </CheckboxField>

                  <Button isDark={true} as="button" type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner /> : 'Send it to meee!'}
                  </Button>
                </Form>
              )}
            </>
          )}
        </Formik>
      </Container>
    </LayoutContainer>
  );
};

export default ContactPage;
