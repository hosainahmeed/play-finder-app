import React from "react";
import { FieldsType } from "../types/Types";
import { validateFields } from "../utils/formValidate";

export const handlePostTask = (
  fields: FieldsType[],
  setFields: React.Dispatch<React.SetStateAction<FieldsType[]>>,
  currentSlide: number
) => {
  const isValid = validateFields(fields, setFields);
  // if (currentSlide !== 3) {
  return isValid;
  // }
};
