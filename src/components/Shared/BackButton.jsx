import {
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { otherIcons } from "../../constant/images";
import CircleButton from "../ui/buttons/CircleButton";

const BackButton = ({ text, show = false, imageSource, handler }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
      }}
    >
      <CircleButton
        style={{
          height: 30,
          width: 30,
          borderRadius: 30,
          marginTop: 10,
          backgroundColor: "#E6ECF5",
          borderColor: "#002868",
          borderWidth: 1,
        }}
        imageSource={otherIcons.ArrowLeft}
        onPress={() => navigation.goBack()}
      />
      <Text
        numberOfLines={1}
        style={{
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        {text}
      </Text>
      {show ? (
        <CircleButton
          style={{
            height: 30,
            width: 30,
            borderRadius: 30,
            marginTop: 10,
            backgroundColor: "#E6ECF5",
            borderColor: "#002868",
            borderWidth: 1,
          }}
          imageSource={
            imageSource
              ? imageSource
              : otherIcons.Report
          }
          onPress={() => handler?.()}
        />
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});
