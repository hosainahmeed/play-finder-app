import { validateFields } from '../utils/formValidate';

export const handleSignup = (
  fields,
  setFields,
  currentSlide,
) => {
  const isValid = validateFields(fields, setFields);
  if (currentSlide !== 4) {
    return isValid;
  }
  // console.log(isValid)
};
