import React, { useState, useRef } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderDesign from "../../../components/Shared/HeaderDesign";
import TextSecondary from "../../../components/Shared/TextSecondary";
import ButtonBG from "../../../components/ui/buttons/ButtonBG";
import Navigate from "../../../utils/Navigate";
import SafeAreaProvider from "../../../providers/SafeAreaProvider";
import { useRoute } from "@react-navigation/native";

const VerifyOtp = () => {
  const route = useRoute();
  const { phoneNumber, from } = route.params || {};
  console.log(phoneNumber)
  const { height } = Dimensions.get("window");
  const { top, bottom } = useSafeAreaInsets();
  const navigate = Navigate();

  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const otpInputRef = useRef(null);



  const handleVerify = async () => {
    if (code.length !== 6) {
      Alert.alert("Invalid Code", "Please enter the complete 6-digit code");
      return;
    }

    setIsLoading(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 1000));

      if (from === "forget") {
        navigate("ResetPassword");
      } else {
        navigate("SubscriptionPurchase");
      }
    } catch (error) {
      Alert.alert("Verification Failed", "Please check the code and try again");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = () => {

    setCode("");
    otpInputRef.current?.clear();


    Alert.alert("Code Sent", "A new verification code has been sent to your phone");
  };


  return (
    <SafeAreaProvider backButtonText="Verify OTP">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.container, { minHeight: height - top - bottom }]}>
          <View style={styles.content}>
            <HeaderDesign text="6-digit code" />
            <TextSecondary
              text={`Please enter the code we've sent to your Email`}
            />

            <OtpInput
              ref={otpInputRef}
              numberOfDigits={6}
              onTextChange={setCode}
              focusColor="#0A2463"
              focusStickBlinkingDuration={500}
              theme={{
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
              }}
              autoFocus={true}
            />

            <ButtonBG
              style={styles.confirmButton}
              text={isLoading ? "Verifying..." : "Confirm"}
              handler={handleVerify}
              disabled={code.length !== 6 || isLoading}
            />

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>
                Didn't receive the code?{" "}
              </Text>
              <TouchableOpacity
                onPress={handleResendCode}
              >
                <Text style={styles.resendButton}>
                  Resend Code
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
    marginTop: -100,
  },
  pinCodeContainer: {
    backgroundColor: "#F9F9FB",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    height: 60,
    width: 50,
  },
  pinCodeText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1C1C",
  },
  confirmButton: {
    marginTop: 10,
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  resendText: {
    fontSize: 14,
    color: "#5A5A5A",
  },
  resendButton: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0A2463",
  },
});