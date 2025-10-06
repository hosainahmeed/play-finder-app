import React from "react";
import { Text } from "react-native";

const HeaderSecondary = ({
  text,
  style,
}) => {
  return (
    <Text
      style={[
        {
          fontFamily: "Poppins",
          fontSize: 14,
          color: "#111827",
          fontWeight: 500,
          textTransform: "capitalize",
          lineHeight: 24,
        },
        style,
      ]}
    >
      {text ?? "text here"}
    </Text>
  );
};

export default HeaderSecondary;
