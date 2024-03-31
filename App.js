import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native"; // Corrected FlatList
import exercises from "./assets/data/exercises.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item }) => {
          return (
            <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}
              </Text>
              <StatusBar style="auto" />
            </View>
          );
        }}
      />
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
    margin: 5, // Note: 'gap' might not work as expected in React Native; consider using margin instead.
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  exerciseName: {
    fontSize: 24,
    fontWeight: "500", // Corrected fontWeight
    color: "black",
  },

  exerciseSubtitle: {
    fontSize: 16, // Corrected fontSize
    color: "dimgray",
  },
});
