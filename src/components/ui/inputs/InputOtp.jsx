import React from "react";
import { OtpInput } from "react-native-otp-entry";

const InputOtp = () => {
  return (
    <OtpInput numberOfDigits={6} onTextChange={(text) => console.log(text)} />
  );
};

export default InputOtp;
