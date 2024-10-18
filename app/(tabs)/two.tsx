import React, { useState } from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import { Text, View } from "@/components/Themed";
import Header from "@/components/TestScreen/Header";
import SegmentedControl from "@/components/TestScreen/SegmentedControl";
import ListItem from "@/components/TestScreen/ListItem";
import Chart from "@/components/charts/Chart";
import ReusableChart from "@/components/chartComponent/ReusableChart";

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

const dataSoldPrice = [
  { x: "Jan 2022", y: 8000 },
  { x: "May 2022", y: 8500 },
  { x: "Sep 2022", y: 7800 },
  { x: "Jan 2023", y: 9000 },
  { x: "May 2023", y: 7500 },
  { x: "Sep 2023", y: 8200 },
  { x: "Jan 2024", y: 8900 },
  { x: "May 2024", y: 8100 },
  { x: "Sep 2024", y: 8600 },
  { x: "Oct 2024", y: 9000 },
];

const dataNewListings = [
  { x: "Jan 2022", y: 4000 },
  { x: "May 2022", y: 5000 },
  { x: "Sep 2022", y: 4500 },
  { x: "Jan 2023", y: 5200 },
  { x: "May 2023", y: 4800 },
  { x: "Sep 2023", y: 5100 },
  { x: "Jan 2024", y: 6000 },
  { x: "May 2024", y: 5500 },
  { x: "Sep 2024", y: 5000 },
  { x: "Oct 2024", y: 4700 },
];

const dataActiveListings = [
  { x: "Jan 2022", y: 5000 },
  { x: "May 2022", y: 7000 },
  { x: "Sep 2022", y: 6500 },
  { x: "Jan 2023", y: 6800 },
  { x: "May 2023", y: 7300 },
  { x: "Sep 2023", y: 7200 },
  { x: "Jan 2024", y: 7900 },
  { x: "May 2024", y: 8000 },
  { x: "Sep 2024", y: 7500 },
  { x: "Oct 2024", y: 7200 },
];
const soldPriceDistributionData = [
  { x: "$100K", y: 50 },
  { x: "$500K", y: 1500 },
  { x: "$900K", y: 1200 },
  { x: "$1.3M", y: 900 },
  { x: "$1.7M", y: 700 },
  { x: "$2.1M", y: 400 },
  { x: "$2.5M", y: 300 },
  { x: "$2.9M", y: 200 },
  { x: "$3.3M", y: 100 },
  { x: "$3.7M", y: 50 },
  { x: "$4.1M", y: 20 },
  { x: "$4.5M", y: 10 },
  { x: "$5.0M+", y: 5 },
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
{/* 
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


      </ScrollView> */}


      <ScrollView>

        <View style={styles.Chartcontainer}>
          <Chart />
        </View>

        <View style={styles.Chartcontainer}>
          <ReusableChart
            title="Sold & Active Listings"
            xAxisLabels={[
              "Jan 2022",
              "May 2022",
              "Sep 2022",
              "Jan 2023",
              "May 2023",
              "Sep 2023",
              "Jan 2024",
              "May 2024",
              "Sep 2024",
              "Oct 2024",
            ]}
            yAxisDomain={[0, 12000]} // Set Y-axis domain based on the data range
            yAxisLabelFormat={(value) => `${value / 1000}k`} // Format Y-axis labels
            dataSets={[
              { data: dataSoldPrice, type: "line", color: "#e91e63", label: "Median Sold Price" },
              { data: dataNewListings, type: "line", color: "#ff9800", label: "New Listings" },
              { data: dataActiveListings, type: "bar", color: "#4caf50", label: "Active Listings" },
            ]}
          />
        </View>

        <View style={styles.Chartcontainer}>
          <ReusableChart
            title="Sold Price Distribution"
            xAxisLabels={["$100K", "$500K", "$900K", "$1.3M", "$1.7M", "$2.1M", "$2.5M", "$2.9M", "$3.3M", "$3.7M", "$4.1M", "$4.5M", "$5.0M+"]}
            yAxisDomain={[0, 2000]} // Adjust the Y-axis domain based on the data
            yAxisLabelFormat={(value) => `${value}`} // Display sold count on Y-axis
            dataSets={[
              { data: soldPriceDistributionData, type: "bar", color: "#4caf50", label: "Sold Count" }, // Green bars
            ]}
            showLegend={false} // Disable legend for this chart

          />
        </View>
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
  Chartcontainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical:8
  },
 
});
