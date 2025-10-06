import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HeaderSecondary from "../../Shared/HeaderSecondary";

const TimePicker = ({
  style,
  inputStyle,
  placeHolder = "Please enter",
  label = "Enter your",
  error = false,
  handler,
  value,
  name,
  required = true,
  showLabel = true,
}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    console.log(currentDate);
    // handler?.(name as string, currentDate)
  };
  return (
    <View
      style={{
        backgroundColor: "transparent",
        ...style,
      }}
    >
      {showLabel && (
        <HeaderSecondary
          style={{
            color: required ? (error ? "red" : "#111827") : "#111827",
            marginBottom: 5,
          }}
          text={label}
        />
      )}
      <TouchableOpacity onPress={() => setShow(true)}>
        <Text
          style={{
            backgroundColor: "#E6ECF5",
            lineHeight: 26,
            padding: 15,
            paddingVertical: 12,
            borderRadius: 8,
            ...(error
              ? {
                borderColor: "red",
                borderWidth: 1,
              }
              : {}),
            ...inputStyle,
          }}
        >
          {value != "" ? value : placeHolder}
        </Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default TimePicker;

const styles = StyleSheet.create({});
