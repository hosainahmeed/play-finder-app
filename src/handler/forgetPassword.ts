import React from "react";
import { FieldsType } from "../types/Types";
import { validateFields } from "../utils/formValidate";

export const handleForgetPassword = (
  fields: FieldsType[],
  setFields: React.Dispatch<React.SetStateAction<FieldsType[]>>
) => {
  const isValid = validateFields(fields, setFields);
  console.log(isValid);
};
