import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercise = exercises[0];
  console.log(exercise);
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>{exercise.muscle}</Text>
        <Text style={styles.exerciseSubtitle}>{exercise.equipment}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
    alignItems: "center",
    justifyContent: "center",
  },

  exerciseContainer: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    gap: 5,
  },

  exerciseName: {
    fontSize: 24,
    fontWeight: 500,
    color: "black",
  },

  exerciseSubtitle: {
    fontsize: 16,
    color: "dimgray",
  },
});
