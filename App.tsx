import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Neumorphism from "./src/screens/Neumorphism";

export default function App() {
  return (
    <View style={styles.container}>
      <Neumorphism />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
