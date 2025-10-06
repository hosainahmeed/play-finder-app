import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Portal } from "@gorhom/portal";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { otherIcons } from "../../../constant/images";
import HeaderSecondary from "../../Shared/HeaderSecondary";
import TextPrimary from "../../Shared/TextPrimary";
const SelectInput = ({
  value,
  placeHolder = "please select",
  style,
  options = [
    { label: "options 1 ", value: "options 1" },
    { label: "options 2 ", value: "options 2" },
  ],
  label = "select item",
  error = false,
  handler,
  name,
  required = true,
}) => {
  const bottomSheetRef = useRef(null);
  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <>
      <HeaderSecondary
        style={{
          color: required ? (error ? "red" : "#111827") : "#111827",
        }}
        text={label}
      />
      <TouchableOpacity
        onPress={() => bottomSheetRef.current?.snapToIndex(1)}
        style={{
          padding: 15,
          borderRadius: 6,
          backgroundColor: "#E6ECF5",
          paddingVertical: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...style,
        }}
      >
        <TextPrimary text={value ? value : placeHolder} />
        <Image source={otherIcons.arrowDown} />
      </TouchableOpacity>
      <Portal>
        <BottomSheet
          style={{ zIndex: 99999999999 }}
          onClose={handleClose}
          handleComponent={() => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 6,
                paddingHorizontal: 10,
              }}
            >
              <View></View>
              <View
                style={{
                  backgroundColor: "gray",
                  padding: 3,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}
              ></View>
              <TouchableOpacity onPress={handleClose}>
                <Image
                  source={otherIcons.Close}
                  style={styles.closeIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
          index={-1}
          snapPoints={["25%", "45%", "70%"]}
          ref={bottomSheetRef}
        >
          <BottomSheetView style={styles.sheetContent}>
            <View
              style={{
                flex: 1,
                gap: 8,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {options?.map((item) => (
                <TouchableOpacity
                  onPress={() => {
                    bottomSheetRef?.current?.close();
                    handler?.(name, item?.value);
                  }}
                  style={{
                    padding: 6,
                    backgroundColor:
                      item?.value == value ? "#C1E0DA" : "#E6ECF5",
                    width: "100%",
                    borderRadius: 4,
                  }}
                >
                  <Text
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {item?.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </BottomSheetView>
        </BottomSheet>
      </Portal>
    </>
  );
};

export default SelectInput;

const styles = StyleSheet.create({
  sheetContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    position: "relative",
  },

  closeIcon: {
    width: 15,
    height: 15,
    tintColor: "#000",
  },
});
