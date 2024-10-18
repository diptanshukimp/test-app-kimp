import React from "react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme, VictoryLegend, VictoryBar, VictoryTooltip } from "victory-native";
import { View, Dimensions, Text, StyleSheet } from "react-native";

type DataPoint = {
  x: string;
  y: number;
};

type ChartProps = {
  title: string;
  dataSets: Array<{
    data: DataPoint[];
    type: "line" | "bar";
    color: string;
    label: string;
  }>;
  xAxisLabels: string[];
  yAxisDomain: number[];
  yAxisLabelFormat?: (value: number) => string;
  showLegend?: boolean; // New prop to control whether the legend is displayed
};

const ReusableChart: React.FC<ChartProps> = ({ title, dataSets, xAxisLabels, yAxisDomain, yAxisLabelFormat,showLegend }) => {
  const { width } = Dimensions.get("window");

  return (
    <>

      <Text style={styles.heading}>Toronto</Text>

      <Text style={styles.chartHeading}>{title}</Text>

      <View style={{ height: "auto", width: "100%" }}>
        <VictoryChart
          width={width - 40}
          height={350}
          theme={VictoryTheme.material}
          domainPadding={{ x: [20, 20], y: [20, 20] }}
          padding={{ left: 60, right: 60, top: 20, bottom: 50 }}
          domain={{ y: yAxisDomain }} // Configurable domain for Y-axis
        >


          {showLegend && (
            <VictoryLegend
              x={10}
              y={10}
              orientation="horizontal"
              gutter={20}
              data={[
                { name: "Total Sold", symbol: { fill: "#4caf50", type: "square" } }, // Green bars
                { name: "Active Listings", symbol: { fill: "#e91e63", type: "square" } }, // Pink line
                { name: "New Listings", symbol: { fill: "#ff9800", type: "square" } }, // Orange line
              ]}
            />
          )}


          {/* Bar Chart (Total Sold - Rendered first for layering) */}
          {dataSets.map((set, index) => {
            if (set.type === "bar") {
              return (
                <VictoryBar
                  key={index}
                  data={set.data}
                  x="x"
                  y="y"
                  barWidth={8} // Adjust bar width
                  style={{ data: { fill: set.color } }}
                  labelComponent={<VictoryTooltip />}
                  cornerRadius={{ top: 5 }}
                />
              );
            }
          })}

          {/* Line Chart (Active Listings & New Listings - Rendered after bars to be on top) */}
          {dataSets.map((set, index) => {
            if (set.type === "line") {
              return (
                <VictoryLine
                  key={index}
                  data={set.data}
                  x="x"
                  y="y"
                  style={{ data: { stroke: set.color, strokeWidth: 2 } }}
                  labelComponent={<VictoryTooltip />}
                />
              );
            }
          })}

          {/* X-Axis */}
          <VictoryAxis
            tickValues={xAxisLabels}
            style={{
              tickLabels: { fontSize: 10, angle: -45, textAnchor: "end" },
            }}
          />

          {/* Y-Axis */}
          <VictoryAxis
            dependentAxis
            tickFormat={yAxisLabelFormat || ((x) => `${x}`)} // Customizable tick format
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              tickLabels: { fontSize: 10, padding: 5, textAnchor: "middle" },
            }}
          />
        </VictoryChart>
      </View>
    </>
  );
};

export default ReusableChart;

const styles = StyleSheet.create({
  chartHeading: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 14,
    paddingVertical: 10,
  },
  heading: {
    textAlign: "left",
    fontSize: 10,
    fontWeight: "300",
    paddingLeft: 14,
    paddingVertical: 10,
  }
});
