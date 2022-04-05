import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useReducer } from "react";

export default function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          count: state.count + 1,
          showText: state.showText,
        };
      case "TOGGLE_TEXT":
        return {
          count: state.count,
          showText: !state.showText,
        };
      default:
        return {};
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  function onPressHandler() {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "TOGGLE_TEXT" });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.count}</Text>
      <Button title="Increment" onPress={onPressHandler}></Button>
      {state.showText && <Text style={styles.text}>Hello!</Text>}
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
