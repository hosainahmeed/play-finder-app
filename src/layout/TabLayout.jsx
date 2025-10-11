import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Tabbar from "../components/tabbar/Tabbar";
import HomeScreen from "../screens/tabs/HomeScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";
import SearchScreen from "../screens/tabs/SearchScreen";
import ShortlistedScreen from "../screens/tabs/ShortlistedScreen";

const Tab = createBottomTabNavigator();
const TabLayout = () => {

  const tabs = [
    {
      route: "Home",
      label: "Home",
      component: HomeScreen,
    },
    {
      route: "Search",
      label: "Search",
      component: SearchScreen,
    },
    {
      route: "Shortlisted",
      label: "Shortlisted",
      component: ShortlistedScreen,
    },
    {
      route: "Profile",
      label: "Profile",
      component: ProfileScreen,
    },
  ];
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <Tabbar {...props} />}
    >
      {tabs?.map((item,index) => (
        <Tab.Screen
          key={index}
          name={item?.route}
          options={{
            tabBarLabel: item?.label,
            headerShown: false,
          }}
          component={item?.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabLayout;
