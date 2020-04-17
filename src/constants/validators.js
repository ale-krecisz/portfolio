import { string, boolean } from 'yup';

const requiredString = errorMessageId =>
  string()
    .trim()
    .required(errorMessageId);

export const validators = {
  firstName: requiredString('Name is required'),
  search: requiredString('You need to write something. It\'s required'),
  email: string()
    .email('Incorrect e-mail format')
    .required('Email is required'),
  message: requiredString('Message is required'),
  termsAccepted: boolean().oneOf([true], 'To send me a message, you need to accept terms'),
};
