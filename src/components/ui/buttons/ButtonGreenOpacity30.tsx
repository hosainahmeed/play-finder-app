import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
const ButtonGreenOpacity30 = ({
  style,
  text,
  handler,
  textStyle,
  activeOpacity = 0.7,
}: {
  style?: ViewStyle;
  text?: string;
  handler?: () => void;
  textStyle?: TextStyle;
  activeOpacity?: number;
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handler?.();
      }}
      activeOpacity={activeOpacity}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 6,
        backgroundColor: "#E6ECF5",
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
          color: "#00000",
          fontWeight: 600,
          lineHeight: 22,
          ...textStyle,
        }}
      >
        {text ? text : "Close"}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonGreenOpacity30;
