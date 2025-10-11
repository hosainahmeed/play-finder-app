
import { useLinkBuilder } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TabItem from "./TabItem";
import { PlatformPressable } from "@react-navigation/elements";

const Tabbar = ({ state, descriptors, navigation }) => {
  const { buildHref } = useLinkBuilder();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={{ flexDirection: "row", marginBottom: bottom, height: 70 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,backgroundColor: "#E6F4F1" }}
          >
            <TabItem
              route={route.name}
              label={label}
              isFocused={isFocused}
            />
          </PlatformPressable>
        );
      })}
    </View>
  );
};

export default Tabbar;
