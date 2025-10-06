import React from "react";
import DatePicker from "../components/ui/inputs/DatePicker.jsx";
import Input from "../components/ui/inputs/Input";
import InputCheckbox from "../components/ui/inputs/InputCheckbox";
import PasswordInput from "../components/ui/inputs/PasswordInput";
import SelectInput from "../components/ui/inputs/SelectInput";
import TextArea from "../components/ui/inputs/TextArea";
import TimePicker from "../components/ui/inputs/TimePicker";

const DynamicFields = (
  field,
  setFields
) => {
  if (field.type == "checkbox") {
    return (
      <InputCheckbox
        key={field.name}
        handler={(name, value) =>
          setFields((prev) =>
            prev.map((field) =>
              field.name === name ? { ...field, value, error: false } : field
            )
          )
        }
        error={field?.error}
        label={field?.label}
        name={field?.name}
        value={field?.value}
      />
    );
  }

  if (field.type == "password") {
    return (
      <PasswordInput
        key={field.name}
        error={field?.error}
        handler={(name, value) =>
          setFields((prev) =>
            prev.map((field) =>
              field.name === name ? { ...field, value, error: false } : field
            )
          )
        }
        placeHolder={field?.placeHolder}
        label={field?.label}
        name={field?.name}
        value={field?.value}
        keyboard={field?.keyboard}
      />
    );
  }

  if (field.type == "string") {
    return (
      <Input
        placeHolder={field?.placeHolder}
        error={field?.error}
        key={field.name}
        handler={(name, value) =>
          setFields((prev) =>
            prev.map((field) =>
              field.name === name ? { ...field, value, error: false } : field
            )
          )
        }
        label={field?.label}
        name={field?.name}
        value={field?.value}
        keyboard={field?.keyboard}
      />
    );
  }

  if (field.type == "textarea") {
    return (
      <TextArea
        placeHolder={field?.placeHolder}
        error={field?.error}
        key={field.name}
        handler={(name, value) =>
          setFields((prev) =>
            prev.map((field) =>
              field.name === name ? { ...field, value, error: false } : field
            )
          )
        }
        label={field?.label}
        name={field?.name}
        value={field?.value}
        keyboard={field?.keyboard}
      />
    );
  }

  if (field.type == "select") {
    return (
      <SelectInput
        placeHolder={field?.placeHolder}
        error={field?.error}
        key={field.name}
        handler={(name, value) =>
          setFields((prev) =>
            prev.map((field) =>
              field.name === name ? { ...field, value, error: false } : field
            )
          )
        }
        label={field?.label}
        name={field?.name}
        value={field?.value}
        required={field?.required}
        options={field?.options}
      />
    );
  }

  if (field.type == "date") {
    return (
      <DatePicker
        placeHolder={field?.placeHolder}
        error={field?.error}
        key={field.name}
        handler={(name, value) =>
          setFields((prev) =>
            prev.map((field) =>
              field.name === name ? { ...field, value, error: false } : field
            )
          )
        }
        label={field?.label}
        name={field?.name}
        value={field?.value}
        required={field?.required}
      />
    );
  }
  if (field.type == "time") {
    return (
      <TimePicker
        placeHolder={field?.placeHolder}
        error={field?.error}
        key={field.name}
        handler={(name, value) =>
          setFields((prev) =>
            prev.map((field) =>
              field.name === name ? { ...field, value, error: false } : field
            )
          )
        }
        label={field?.label}
        name={field?.name}
        value={field?.value}
        required={field?.required}
      />
    );
  }
};
export default DynamicFields