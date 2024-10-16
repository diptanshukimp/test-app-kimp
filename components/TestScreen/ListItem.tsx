import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import icons

interface ListItemProps {
  name: string;
  subtitle: string;
}

const ListItem: React.FC<ListItemProps> = ({ name, subtitle }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.iconContainer}>
        <Icon name="location-on" size={24} color="#666" />
      </View>
      <View>
        <Text style={styles.listItemTitle}>{name}</Text>
        <Text style={styles.listItemSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(200, 200, 200, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  listItemSubtitle: {
    fontSize: 14,
    color: "#888",
  },
});
