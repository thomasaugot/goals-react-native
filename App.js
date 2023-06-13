import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };
  const addGoalHandler = () => {
    if (enteredText.length < 1) {
      alert("Please enter a value");
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: enteredText, key: Math.random().toString() },
    ]);
    setEnteredText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.topContainer}>
        <TextInput
          placeholder="Enter your goal here"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(item) => {
            return (
              <Text style={styles.goalItem}>
                <GoalItem text={item.item.text} />
              </Text>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#cccccc",
    borderWidth: 1,
    height: 40,
    width: "70%",
    paddingLeft: 15,
    alignItems: "center",
  },
  topContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "black",
    height: 40,
  },
  goalsContainer: { flex: 5, marginTop: 30 },
});
