
import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

import Button from 'components/Button';
import InputField from 'components/InputField/InputField';

import {
  Form,
} from './styled';

const SearchBar = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{ search: '' }}
      validate={values => {
        const errors = {};
        if (!values.search) {
          errors.search = 'Required';
        }
        return errors;
      }}

      onSubmit={(values) => {
        onSubmit(values.search);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <InputField
            name="search"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Do You wanna try?"
            errors={errors.search && touched.search && errors.search}
          />
          <Button color={true} as='button' type='submit'>
            Let&apos;s try!
          </Button>
        </Form>
      )}
    </Formik>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func
};

export default SearchBar;