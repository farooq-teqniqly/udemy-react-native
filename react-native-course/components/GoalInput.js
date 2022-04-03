import { StyleSheet, TextInput, Modal } from "react-native";

function GoalInput(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={props.goalInputHandler}
        value={props.value}
      ></TextInput>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "70%",
    marginRight: 5,
    paddingLeft: 5,
  },
});
