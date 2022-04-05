import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(true);

  function onPressHandler() {
    setCounter(counter + 1);
    setShowText(!showText);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <Button title="Increment" onPress={onPressHandler}></Button>
      {showText && <Text style={styles.text}>Hello!</Text>}
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
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
