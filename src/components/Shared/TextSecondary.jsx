import React from "react";
import { Text, TextStyle } from "react-native";

const TextSecondary = ({
  text,
  style,
}) => {
  return (
    <Text
      style={[
        {
          fontFamily: "Poppins",
          fontSize: 14,
          color: "#6B7280",
          fontWeight: 400,
          lineHeight: 23,
        },
        style,
      ]}
    >
      {text ?? "text here"}
    </Text>
  );
};

export default TextSecondary;
