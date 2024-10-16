import { View as RNView, Text as RNText } from "react-native";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <RNView className="flex-1 items-center justify-center bg-white">
        <RNText className="text-lg font-bold">
          Hello, Tailwind with Expo!
        </RNText>
        <StatusBar style="auto" />
      </RNView>
      {false && <EditScreenInfo path="app/(tabs)/index.tsx" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
