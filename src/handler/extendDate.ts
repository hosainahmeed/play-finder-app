import { FieldsType } from "../types/Types";
import { validateFields } from "../utils/formValidate";

export const handleExtendDate = (
  fields: FieldsType[],
  setFields: React.Dispatch<React.SetStateAction<FieldsType[]>>
) => {
  const isValid = validateFields(fields, setFields);
  console.log(isValid);
};
