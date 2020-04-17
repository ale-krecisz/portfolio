import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { Label, Error, Checkbox, Message } from './styled';

const CheckboxField = ({ name, isInvalid, errors, text, checked, ...props }) => {
  const [field, { error, touched }] = useField({ name });
  const hasError = !!error && touched;

  return (
    <Label>
      <Checkbox
        type="checkbox"
        id={name}
        name={name}
        isInvalid={isInvalid}
        checked={checked}
        {...field}
        {...props}
      />
      <span />
      <Message>{text}</Message>
      {hasError && <Error name={name}>{errors}</Error>}
    </Label>
  );
};

CheckboxField.propTypes = {
  checked: PropTypes.bool,
  errors: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
};

export default CheckboxField;
