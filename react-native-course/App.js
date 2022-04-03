import { useState } from "react";
import { StyleSheet, View, Button } from "react-native";

import GoalList from "./components/GoalList";
import GoalInputForm from "./components/GoalInputForm";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function goalInputHandler(goalText) {
    setGoalText(goalText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
    setGoalText("");
  }

  function clearGoalHandler() {
    setGoals([]);
  }

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((g) => g.id !== id);
    });
  }

  function startAddGoalHandler() {
    setShowModal(true);
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add Goal"
        color="pink"
        onPress={startAddGoalHandler}
      ></Button>
      <GoalInputForm
        visible={showModal}
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        clearGoalHandler={clearGoalHandler}
        value={goalText}
      ></GoalInputForm>
      <GoalList goals={goals} pressHandler={deleteGoalHandler}></GoalList>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
