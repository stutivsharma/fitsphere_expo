import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator } from "react-native";
import { gql, request } from "graphql-request";

const url = "https://ponteveque.stepzen.net/api/wrinkled-snake/__graphql";
const exercisesQuery = gql`
  query exercises($muscle: String, $name: String) {
    exercises(muscle: $muscle, name: $name) {
      name
      muscle
      equipment
    }
  }
`;

export default function ExercisesScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: async () => {
      return request({
        url,
        document: exercisesQuery,
        requestHeaders: {
          Authorization:
            "apikey ponteveque::stepzen.io+1000::c0edfada0b0aeb6ec154260f917598bc7489acca9bb23e17514fac39292f1041",
        },
      });
    },
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text> Failed to handle request</Text>;
  }

  console.log(data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
