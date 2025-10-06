import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navigate, { Navigation } from "../../../utils/Navigate";
import { otherIcons } from "../../../constant/images";


const OnboardingBackButton = ({ show = true }) => {
  const navigate = Navigate();
  const navigation = Navigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
        marginTop: 10,
      }}
    >
      {show ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={otherIcons.ArrowLeft} />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

      <TouchableOpacity onPress={() => navigate("TabLayout")}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: "#115E59",
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingBackButton;
