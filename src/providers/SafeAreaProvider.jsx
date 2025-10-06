import {
  CommonActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useGlobalContext } from "./GlobalContextProvider";
import BackButton from "../components/Shared/BackButton";

const withoutLog = [
  "login",
  "register",
  "forget",
  "verify",
  "resetpassword",
  "choosesignup",
  "customersignup",
  "servicesignup",
  "trustedservices",
  "securepayments",
  "realtimebooking",
];
const SafeAreaProvider = ({
  children,
  backButtonText,
  zeroPadding = false,
}) => {
  const { top, bottom } = useSafeAreaInsets();
  const navigation = useNavigation();
  const route = useRoute();
  const { role } = useGlobalContext();
  useEffect(() => {
    if (!role) {
      const currentRoute = route.name.toLowerCase();
      if (!withoutLog.includes(currentRoute)) {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        );
      }
    }
  }, [role, route.name]);
  return (
    <View
      style={{
        marginTop: zeroPadding ? 0 : top,
        marginBottom: zeroPadding ? 0 : bottom,
      }}
    >
      <View
        style={{
          paddingHorizontal: zeroPadding ? 0 : 20,
        }}
      >
        {backButtonText && <BackButton text={backButtonText} />}
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default SafeAreaProvider;

const styles = StyleSheet.create({});
