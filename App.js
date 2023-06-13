import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

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
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredText]);
    setEnteredText("");
  };

  return (
    <ScrollView>
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
          {courseGoals.map((courseGoal, index) => (
            <Text key={index} style={styles.goalItem}>
              {courseGoal}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
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
  goalItem: {
    padding: 7,
    backgroundColor: "#8a2be2",
    color: "white",
    width: 300,
    margin: 5,
    borderRadius: 10,
  },
});
