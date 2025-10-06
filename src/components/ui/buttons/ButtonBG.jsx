import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonBG = ({
  style,
  text,
  handler,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handler?.();
      }}
      activeOpacity={0.7}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        backgroundColor: "#002868",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        ...style,
      }}
    >
      <Text
        style={{
          lineHeight: 23,
          color: "#FFFFFF",
          ...textStyle,
        }}
      >
        {text ? text : "Close"}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonBG;
