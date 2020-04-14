import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

import { 
  Label,
  Error,Input
} from './styled';

const InputField = ({
  name,
  label,
  placeholder,
  isInvalid,
  errors,
  type,
  ...props}) => {
  const [field, { error, touched }] = useField({ name });
  const hasError = !!error && touched;

  return (
    <Label>
      {label}
      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        isInvalid={isInvalid}
        {...field}
        {...props}
      />
      {hasError && <Error name={name}>{errors}</Error>}
    </Label>
  );
};

InputField.propTypes = {
  errors: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
  type: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
};

export default InputField;