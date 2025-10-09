import React from "react";
import Login from "../screens/stacks/auth/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseSignUp from "../screens/stacks/auth/ChooseSignUp";
import Register from "../screens/stacks/auth/Register";
import VerifyOtp from "../screens/stacks/auth/VerifyOtp";
import FindEventsOnboarding from "../screens/stacks/onboarding/FindEventsOnboarding";
import ExploreEventDetailsOnboarding from "../screens/stacks/onboarding/ExploreEventDetailsOnboarding";
import RegisterWithEase from "../screens/stacks/onboarding/RegisterWithEase";
import SubscriptionPurchase from "../screens/stacks/defults/SubscriptionPurchase"

const Stack = createNativeStackNavigator();

const StackLayout = () => {
  const screens = {
    Login: Login,
    ChooseSignUp: ChooseSignUp,
    Register: Register,
    Verify: VerifyOtp,
    SubscriptionPurchase: SubscriptionPurchase,
    // onboarding
    FindEventsOnboarding: FindEventsOnboarding,
    ExploreEventDetailsOnboarding: ExploreEventDetailsOnboarding,
    RegisterWithEase: RegisterWithEase,
  };

  const stacks = Object.keys(screens).map((key) => ({
    route: key,
    label: key,
    component: screens[key],
  }));

  return (
    <Stack.Navigator
      initialRouteName="SubscriptionPurchase"
      screenOptions={{ headerShown: false }}
    >
      {stacks?.map((item) => (
        <Stack.Screen
          name={item?.route}
          component={item?.component}
          options={{
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default StackLayout;
