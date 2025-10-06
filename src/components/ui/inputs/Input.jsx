import React from "react";
import { TextInput, View } from "react-native";
import HeaderSecondary from "../../Shared/HeaderSecondary";
const Input = ({
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
            color: required ? (error ? "red" : "#002868") : "#002868",
            marginBottom: 5,
          }}
          text={label}
        />
      )}

      <TextInput
        value={value}
        style={{
          backgroundColor: "#E6ECF5",
          lineHeight: 26,
          padding: 15,
          paddingVertical: 12,
          borderRadius: 8,
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

export default Input;
