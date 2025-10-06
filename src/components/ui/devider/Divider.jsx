import React from "react";
import { View } from "react-native";

const Divider = ({ style }) => {
  return (
    <View
      style={[
        {
          width: "100%",
          padding: 1,
          borderRadius: 10,
          backgroundColor: "#64748B",
        },
        style,
      ]}
    ></View>
  );
};

export default Divider;
