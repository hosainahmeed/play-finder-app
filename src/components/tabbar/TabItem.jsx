import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TabIcons } from "../../constant/images";

const TabItem = ({
  label,
  isFocused,
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderTopWidth: isFocused ? 2 : 0,
        borderColor: isFocused ? "#115E59" : "#115E59",
        backgroundColor: isFocused ? "#E6ECF5" : "white",
        elevation: isFocused ? 2 : 0
      }}
    >
      <Image
        source={TabIcons[label]}
        style={{
          width: 24,
          height: 24,
          marginBottom: 4,
          tintColor: isFocused ? "#115E59" : "black",
        }}
      />
      <Text
        style={{
          color: isFocused ? "#115E59" : "black",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
