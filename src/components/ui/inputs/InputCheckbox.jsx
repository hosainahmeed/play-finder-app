import React from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
const InputCheckbox = ({
  label = "check me",
  error = false,
  handler,
  value,
  name,
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 6,
      }}
    >
      <BouncyCheckbox
        size={20}
        fillColor="#002868"
        unFillColor="#FFFFFF"
        isChecked={value}
        iconStyle={{
          borderColor: "#002868",
          borderRadius: 0,
        }}
        innerIconStyle={{
          borderWidth: 2,
          borderRadius: 0,
        }}
        text={label}
        textStyle={{
          textDecorationLine: "none",
        }}
        onPress={(isChecked) => {
          handler?.(name, isChecked);
        }}
      />
    </View>
  );
};

export default InputCheckbox;
