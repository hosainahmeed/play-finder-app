import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const ImageButton = ({
  imageSource,
  title,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Image
        source={imageSource}
        style={{
          width: "100%",
          borderRadius: 10,
          objectFit: "contain",
        }}
      />
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  title: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: "-50%" }],
    right: 10,
    width: "50%",
    fontSize: 24,
    fontWeight: "700",
  },
});

export default ImageButton;
