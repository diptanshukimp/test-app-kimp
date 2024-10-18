import React from "react";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryTheme,
  VictoryLegend,
  VictoryBar,
  VictoryTooltip,
} from "victory-native";
import { View, Dimensions } from "react-native";

type DataPoint = {
  month: string;
  price?: number;
  days?: number;
};

const dataSoldPrice: DataPoint[] = [
  { month: "Jan", price: 800000 },
  { month: "Feb", price: 850000 },
  { month: "Mar", price: 780000 },
  { month: "Apr", price: 900000 },
  { month: "May", price: 750000 },
  { month: "Jun", price: 820000 },
  { month: "Jul", price: 890000 },
  { month: "Aug", price: 810000 },
  { month: "Sep", price: 860000 },
  { month: "Oct", price: 900000 },
];

const dataDaysOnMarket: DataPoint[] = [
  { month: "Jan", days: 30 },
  { month: "Feb", days: 28 },
  { month: "Mar", days: 35 },
  { month: "Apr", days: 25 },
  { month: "May", days: 29 },
  { month: "Jun", days: 27 },
  { month: "Jul", days: 32 },
  { month: "Aug", days: 30 },
  { month: "Sep", days: 36 },
  { month: "Oct", days: 34 },
];

const Chart: React.FC = () => {
  const { width } = Dimensions.get("window");

  // Calculate the right axis multiplier directly
  const maxPrice = Math.max(...dataSoldPrice.map((item) => item.price || 0));
  const rightAxisMultiplier = Math.ceil(maxPrice / 40); // Roughly scales days into the price range


  return (
    <View style={{ height: 400, width: "100%" }}>
      <VictoryChart
        width={width - 40}
        height={350}
        theme={VictoryTheme.material}
        domainPadding={{ x: [20, 20], y: [20, 20] }}
        padding={{ left: 60, right: 60, top: 20, bottom: 50 }}
        domain={{ y: [0, 1000000] }} // Adjust the domain for better scaling
      >
        <VictoryLegend
          x={50}
          y={10}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: "Median Sold Price", symbol: { fill: "#e91e63" } },
            { name: "Average Days On Market", symbol: { fill: "#4caf50" } },
          ]}
        />

        {/* Bar chart for days on market */}
        <VictoryBar
          data={dataDaysOnMarket}
          x="month"
          y={(datum) => (datum.days ?? 0) * rightAxisMultiplier} // Scale days for visibility
          labelComponent={<VictoryTooltip />}
          style={{
            data: { fill: "#4caf50", width: 20 },
          }}
        />

        {/* Line chart for sold price */}
        <VictoryLine
          data={dataSoldPrice}
          x="month"
          y={(datum) => datum.price ?? 0}
          labelComponent={<VictoryTooltip />}
          style={{
            data: { stroke: "#e91e63", strokeWidth: 2 },
          }}
        />

        {/* X-Axis */}
        <VictoryAxis
          tickValues={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]}
          style={{
            tickLabels: { fontSize: 10, angle: -45, textAnchor: "end" },
          }}
        />

        {/* Left Y-Axis for prices */}
        <VictoryAxis
          dependentAxis
          tickValues={[200000, 400000, 600000, 800000, 1000000]}
          tickFormat={(x: any) => `$${(x / 1000).toFixed(1)}k`}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: {
              fill: "#e91e63",
              fontSize: 10,
              padding: 5,
              textAnchor: "middle",
            },
          }}
        />

        {/* Right Y-Axis for days on market */}
        <VictoryAxis
          dependentAxis
          orientation="right"
          offsetX={50}
          tickValues={[0, 10, 20, 30, 40].map((x) => x * rightAxisMultiplier)} // Scaled for days
          tickFormat={(x: any) => `${x / rightAxisMultiplier} D`} // Display original days
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: {
              fill: "#4caf50",
              fontSize: 10,
              padding: 5,
              textAnchor: "start",
            },
          }}
        />
      </VictoryChart>
    </View>
  );
};

export default Chart;
