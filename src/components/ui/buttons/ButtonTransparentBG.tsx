import React from "react";
import { Text, TouchableOpacity, ViewStyle } from "react-native";

const ButtonTransparentBG = ({
  style,
  text,
  handler,
  activeOpacity = 0.7,
}: {
  style?: ViewStyle;
  text?: string;
  handler?: () => void;
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
        borderColor: "#002868",
        borderWidth: 2,
        backgroundColor: "transparent",
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
          color: "#002868",
        }}
      >
        {text ? text : "Close"}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonTransparentBG;
