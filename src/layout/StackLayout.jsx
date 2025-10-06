import React from "react";
import Login from "../screens/stacks/auth/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChooseSignUp from "../screens/stacks/auth/ChooseSignUp";
import Register from "../screens/stacks/auth/Register";

const Stack = createNativeStackNavigator();

const StackLayout = () => {
  const screens = {
    Login: Login,
    ChooseSignUp: ChooseSignUp,
    Register: Register,
  };

  const stacks = Object.keys(screens).map((key) => ({
    route: key,
    label: key,
    component: screens[key],
  }));

  return (
    <Stack.Navigator
      initialRouteName="Login"
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
