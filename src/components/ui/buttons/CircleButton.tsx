import React from "react";
import { ImageSourcePropType, StyleSheet, ViewStyle } from "react-native";
import ImageButton from "./ImageButton";

interface CardProps {
  imageSource: ImageSourcePropType;
  title?: string;
  onPress: () => void;
  style?: ViewStyle;
}
const CircleButton: React.FC<CardProps> = ({
  imageSource,
  title,
  onPress,
  style,
}) => {
  return (
    <ImageButton
      title={title}
      style={{
        backgroundColor: "#002868",
        width: "14%",
        height: "100%",
        borderWidth: 0,
        borderColor: "#B2DFDB",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        borderRadius: 0,
        ...style,
      }}
      onPress={onPress}
      imageSource={imageSource}
    />
  );
};

export default CircleButton;

const styles = StyleSheet.create({});
