import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import graphqlClient from "../graphqlClient";
import { ActivityIndicator } from "react-native-web";

const exerciseQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      muscle
      name
      type
      instructions
      equipment
      difficulty
    }
  }
`;

export default function ExerciseDetails() {
  const { name } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises", name],
    queryFn: () => graphqlClient.request(exerciseQuery, { name }),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch data</Text>;
  }
  const exercise = data.exercises[0];

  if (!exercise) {
    return <Text> Exercise Not Found </Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}
      </Text>
      <Text style={styles.exerciseSubtitle}>
        {exercise.difficulty} | {exercise.instructions}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },

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
