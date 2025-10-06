export const validateFields = (fields, setFields) => {
  let isValid = true;

  setFields(prev =>
    prev.map(field => {
      let hasError = false;

      if (field.required) {
        if (field.value === '' || field.value === undefined) {
          hasError = true;
          isValid = false;
        }
      }

      return { ...field, error: hasError };
    }),
  );

  return isValid;
};
