import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { chooseIcons } from "../../../constant/images";
import SafeAreaProvider from "../../../providers/SafeAreaProvider";
import Navigate from "../../../utils/Navigate";
import ButtonBG from "../../../components/ui/buttons/ButtonBG";

const ChooseSignUp = () => {
  const { height } = Dimensions.get("window");
  const { top, bottom } = useSafeAreaInsets();
  const navigate = Navigate();
  const [role, setRole] = useState("")

  const handleFindEvents = () => {
    setRole("find")
  };

  const handleListEvents = () => {
    setRole("list")
  };

  const handleContinue = () => {
    console.log("Continue pressed");
    navigate("Register", { role });
  };

  return (
    <SafeAreaProvider>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ minHeight: height - top - bottom, marginTop: 90 }}>
          <Text style={styles.headerText}>Choose Your Role</Text>
          <Text style={styles.descriptionText}>
            Discover and register for youth Sport events — or list and manage your own. PlayFinderUSA has the right tools for you.
          </Text>

          <View style={styles.roleSelectionContainer}>
            <TouchableOpacity
              style={[styles.roleCard, role === "find" && styles.selectedRoleCard]}
              onPress={handleFindEvents}
            >
              <Image
                source={chooseIcons.FindIcon}
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>Find Events</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.roleCard, role === "list" && styles.selectedRoleCard]}
              onPress={handleListEvents}
            >
              <Image
                source={chooseIcons.ListIcon}
                style={styles.cardIcon}
              />
              <Text style={styles.cardText}>List Events</Text>
            </TouchableOpacity>
          </View>

          <ButtonBG
            text="Continue"
            handler={() => {
              handleContinue();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default ChooseSignUp;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1C1C1C",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: "#5A5A5A",
    lineHeight: 20,
    marginBottom: 30,
  },
  roleSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  roleCard: {
    width: "48%",
    aspectRatio: 1,
    backgroundColor: "#F9F9FB",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRoleCard: {
    borderWidth: 0.5,
    borderColor: "#E0E0E0",
    backgroundColor: '#E0E0E0',
    color: 'white'
  },
  cardIcon: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1C",
    textAlign: "center",
  },
});