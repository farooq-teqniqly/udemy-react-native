import { StyleSheet, View, Button } from "react-native";
import GoalInput from "./GoalInput";

function GoalInputForm(props) {
  return (
    <View style={styles.inputContainer}>
      <GoalInput
        goalInputHandler={props.goalInputHandler}
        value={props.value}
        visible={props.visible}
      ></GoalInput>
      <Button title="Add Goal" onPress={props.addGoalHandler}></Button>
      <Button
        title="Clear Goals"
        color="red"
        onPress={props.clearGoalHandler}
      ></Button>
    </View>
  );
}

export default GoalInputForm;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});
