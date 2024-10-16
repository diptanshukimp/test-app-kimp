import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "@/components/Themed";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import icons

interface HeaderProps {
  navigation: any;
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>
          {" "}
          <Icon name="arrow-back" size={28} color="#000" />
        </Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#999"
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
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#000",
  },
});
