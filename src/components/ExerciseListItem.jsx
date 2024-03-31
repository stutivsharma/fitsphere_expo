import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native"; // Corrected FlatList
import { Link } from "expo-router";

function ExerciseListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
        </Text>
        <StatusBar style="auto" />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  exerciseName: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
  },

  exerciseSubtitle: {
    fontSize: 16,
    color: "dimgray",
  },
});

export default ExerciseListItem;
