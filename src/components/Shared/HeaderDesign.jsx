import React from "react";
import { Text } from "react-native";

const HeaderDesign = ({ text, style }) => {
  return (
    <Text
      style={[
        {
          fontFamily: "Poppins",
          fontSize: 26,
          fontWeight: 500,
          color: "#111827",
        },
        style,
      ]}
    >
      {text ?? "Welcome Back!"}
    </Text>
  );
};

export default HeaderDesign;
