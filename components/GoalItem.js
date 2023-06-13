import { StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  <View style={styles.goalsContainer}>
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  goalItem: {
    fontSize: 18,
    padding: 10,
    backgroundColor: "#8a2be2",
    width: 350,
    margin: 5,
    borderRadius: 10,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
