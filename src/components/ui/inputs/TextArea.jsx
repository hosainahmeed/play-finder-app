import React from "react";
import { TextInput, View } from "react-native";
import HeaderSecondary from "../../Shared/HeaderSecondary";

const TextArea = ({
  keyboard,
  style,
  inputStyle,
  placeHolder = "Please enter",
  label = "Enter your",
  error = false,
  handler,
  value,
  name,
  required = true,
  showLabel = true,
}) => {
  return (
    <View
      style={{
        backgroundColor: "transparent",
        ...style,
      }}
    >
      {showLabel && (
        <HeaderSecondary
          style={{
            color: required ? (error ? "red" : "#111827") : "#111827",
            marginBottom: 5,
          }}
          text={label}
        />
      )}

      <TextInput
        value={value}
        multiline
        style={{
          backgroundColor: "#E6ECF5",
          lineHeight: 26,
          padding: 15,
          paddingVertical: 12,
          borderRadius: 8,
          height: 100,
          textAlignVertical: "top",
          ...(error
            ? {
              borderColor: "red",
              borderWidth: 1,
            }
            : {}),
          ...inputStyle,
        }}
        placeholder={placeHolder}
        keyboardType={keyboard}
        onChangeText={(text) => handler?.(name, text)}
      />
    </View>
  );
};

export default TextArea;
