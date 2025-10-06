import React, { useState } from "react";
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { otherIcons } from "../../../constant/images";
import HeaderSecondary from "../../Shared/HeaderSecondary";

const PasswordInput = ({
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
}) => {
  const [show, setShow] = useState(true);
  return (
    <View
      style={{
        backgroundColor: "transparent",
        position: "relative",
        ...style,
      }}
    >
      <HeaderSecondary
        style={{
          color: required ? (error ? "red" : "#111827") : "#111827",
          marginBottom: 5,
        }}
        text={label}
      />
      <TextInput
        secureTextEntry={show}
        value={value}
        style={{
          backgroundColor: "#E6ECF5",
          padding: 15,
          paddingVertical: 12,
          borderRadius: 8,
          lineHeight: 26,
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
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 10,
          top: 45,
        }}
        activeOpacity={0.7}
        onPress={() => setShow(!show)}
      >
        <Image
          source={
            show
              ? otherIcons?.EyeHide
              : otherIcons?.Eye
          }
          style={{
            flex: 1,
            width: 20,
            height: 20,
            objectFit: 'contain'
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
