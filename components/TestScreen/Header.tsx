import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, useColorScheme } from "react-native";
import { View, Text } from "@/components/Themed";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import icons

interface HeaderProps {
  navigation: any;
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const colorScheme = useColorScheme(); // Detect the current theme (dark or light)

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
        <Icon
          name="arrow-back"
          size={28}
          color={colorScheme === "dark" ? "#fff" : "#000"} // Arrow color based on theme
          style={styles.iconShadow} // Apply shadow to the back arrow
        />
      </TouchableOpacity>
      <TextInput
        style={[styles.searchInput, colorScheme === "dark" ? styles.searchInputDark : styles.searchInputLight]}
        placeholder="Search"
        placeholderTextColor={colorScheme === "dark" ? "#ccc" : "#999"}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10, // Add padding around the search bar
    borderBottomWidth: 0.2, // Add bottom border
    borderBottomColor: "#ddd", // Set bottom border color
    paddingBottom:5
  },
  iconContainer: {
    marginRight: 10,
  },
  iconShadow: {
    shadowColor: "#000", // Shadow for the arrow icon
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, // Shadow for Android
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    // Add a slight shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Shadow for Android
  },
  searchInputLight: {
  },
  searchInputDark: {
  },
});
