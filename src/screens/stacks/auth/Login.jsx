import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FlexText from "../../../components/Shared/FlexText";
import HeaderDesign from "../../../components/Shared/HeaderDesign";
import HeaderSecondary from "../../../components/Shared/HeaderSecondary";
import TextPrimary from "../../../components/Shared/TextPrimary";
import TextSecondary from "../../../components/Shared/TextSecondary";
import ButtonBG from "../../../components/ui/buttons/ButtonBG";
import Divider from "../../../components/ui/devider/Divider";
import { handleSignIn } from "../../../handler/signIn";
import { useGlobalContext } from "../../../providers/GlobalContextProvider";
import SafeAreaProvider from "../../../providers/SafeAreaProvider";
import Navigate from "../../../utils/Navigate";
import LoginFields from "../../../formFields/LoginFields";
import DynamicFields from "../../../utils/DynamicFields";

const Login = () => {
  const { height } = Dimensions.get("window");
  const { top, bottom } = useSafeAreaInsets();
  const { fields, setFields } = LoginFields();
  const { setRole } = useGlobalContext();
  const navigate = Navigate();
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          gap: 6,
          justifyContent: "center",
          minHeight: height - top - bottom,
        }}
      >
        <HeaderDesign text="Welcome Back!" />
        <TextSecondary text="Log in to your account to find events or manage your listings." />
        {fields?.map((field) => DynamicFields(field, setFields))}

        <TouchableOpacity
          // onPress={() =>
          //    navigate("Forget")
          //   }
          style={[styles.forget]}
        >
          <TextSecondary
            style={{
              color: "#002868",
            }}
            text=" Forget Password ?"
          />
        </TouchableOpacity>

        <FlexText
          style={{
            marginTop: 8,
          }}
        >
          <Divider
            style={{
              width: "45%",
            }}
          />
          <HeaderSecondary text="OR" />
          <Divider
            style={{
              width: "45%",
            }}
          />
        </FlexText>

        <FlexText
          style={{
            marginTop: 8,
            marginBottom: 6,
          }}
        >
          <TextPrimary text="Don’t have an account?" />
          <TouchableOpacity
          onPress={() => navigate("ChooseSignUp")}
          >
            <TextSecondary
              style={{
                color: "#002868",
              }}
              text="Sign Up"
            />
          </TouchableOpacity>
        </FlexText>
        <ButtonBG
          text="Log In"
          handler={() => {
            handleSignIn(fields, setFields);
            const email = fields[0]?.value + "";
            setRole(email?.includes("user") ? "user" : "service");
            navigate("TabLayout");
          }}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  forget: {
    marginLeft: "auto",
    marginTop: -24,
  },
});
