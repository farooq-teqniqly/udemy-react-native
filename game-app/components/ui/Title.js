import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.textColor,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.borderColor,
    padding: 12,
  },
});
