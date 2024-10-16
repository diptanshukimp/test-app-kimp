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
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#ffffff",
    borderColor: "#d3d3d3",
    borderWidth: 1,
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
