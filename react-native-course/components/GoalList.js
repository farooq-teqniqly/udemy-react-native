import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./GoalItem";

function GoalList(props) {
  return (
    <View style={styles.goalList}>
      <FlatList
        data={props.goals}
        keyExtractor={(itemData, _index) => {
          return itemData.id;
        }}
        renderItem={(itemData) => {
          return (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              pressHandler={props.pressHandler}
            ></GoalItem>
          );
        }}
      ></FlatList>
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  goalList: {
    flex: 5,
  },
});
