import React from "react";
import { View } from "react-native";

const FlexText = ({
  children,
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 5,
          height: "auto",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default FlexText;
