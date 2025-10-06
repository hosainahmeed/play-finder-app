import React from 'react';
import { validateFields } from '../utils/formValidate';

export const handleSignIn = (fields, setFields) => {
  const isValid = validateFields(fields, setFields);
  console.log(isValid);
};
