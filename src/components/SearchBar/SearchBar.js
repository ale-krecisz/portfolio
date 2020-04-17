import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { object } from 'yup';
import { validators } from 'constants/validators';

import Button from 'components/Button';
import InputField from 'components/InputField/InputField';

import { Form } from './styled';

const validationSchema = object().shape({
  search: validators.search,
});

const SearchBar = ({ onSubmit }) => (
  <Formik
    initialValues={{ search: '' }}
    validationSchema={validationSchema}
    onSubmit={values => {
      onSubmit(values.search);
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <InputField
          name="search"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          placeholder="Do you wanna try?"
          errors={errors.search && touched.search && errors.search}
        />
        <Button color={true} as="button" type="submit">
          Let&apos;s try!
        </Button>
      </Form>
    )}
  </Formik>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchBar;
