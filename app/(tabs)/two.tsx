import React, { useState } from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import Header from "@/components/TestScreen/Header";
import SegmentedControl from "@/components/TestScreen/SegmentedControl";
import ListItem from "@/components/TestScreen/ListItem";

interface LocationItem {
  id: number;
  name: string;
  subtitle: string;
}

const cities: LocationItem[] = [
  { id: 1, name: "Oshawa ON", subtitle: "Durham, Ontario" },
  {
    id: 2,
    name: "Rural Oshawa, Oshawa ON - 3233215",
    subtitle: "Durham, Ontario",
  },
  {
    id: 3,
    name: "Rural Oshawa, Oshawa ON - 3233215",
    subtitle: "Durham, Ontario",
  },
];

const neighborhoods: LocationItem[] = [
  { id: 1, name: "Downtown Oshawa, Oshawa ON", subtitle: "Durham, Ontario" },
  { id: 2, name: "Beaton Oshawa, Oshawa ON", subtitle: "Durham, Ontario" },
];

export default function TabTwoScreen({ navigation }: any) {
  const [selectedTab, setSelectedTab] = useState("Buy");

  const renderListItem = ({ item }: { item: LocationItem }) => (
    <ListItem name={item.name} subtitle={item.subtitle} />
  );

  return (
    <View style={styles.container}>
      {/* Use the Header Component */}
      <Header navigation={navigation} />
      
      {/* Use the Segmented Control Component */}
      <SegmentedControl
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      <ScrollView>
        <Text style={styles.sectionTitle}>Cities</Text>
        <FlatList
          data={cities}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />

        <Text style={styles.sectionTitle}>Neighbourhood</Text>
        <FlatList
          data={neighborhoods}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
});
