import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";

interface SegmentedControlProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <View style={styles.tabContainer}>
      {["Buy", "Rent", "Sold"].map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setSelectedTab(tab)}
          style={[styles.tab, selectedTab === tab && styles.activeTab]}
        >
          <Text
            style={selectedTab === tab ? styles.activeTabText : styles.tabText}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SegmentedControl;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f9fafc",
    paddingHorizontal: 2,
    paddingVertical:5,
    borderRadius: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#ffffff",
    borderColor: "#d3d3d3",
    borderWidth: 0.5,
    paddingHorizontal: 12,

    // Add box shadow for the active tab
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // Shadow moves slightly downwards
    shadowOpacity: 0.1,
    shadowRadius: 3, // Blurry shadow effect
    elevation: 4, // Add elevation for Android
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  activeTabText: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
});
