import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import Play from "../../assets/images/play.png";

const videos = [
  {
    id: "1",
    title: "10 Minute Full Body Workout",
    description:
      "A quick, comprehensive full-body workout for those on the go.",
    thumbnail: require("../../assets/images/thumbnails/one.png"),
    length: "10 mins",
  },
  {
    id: "2",
    title: "Yoga Basics for Beginners",
    description: "Start your yoga journey with these foundational poses.",
    thumbnail: require("../../assets/images/thumbnails/two.png"),
    length: "15 mins",
  },
  {
    id: "3",
    title: "High-Intensity Interval Training (HIIT) Explained",
    description: "Boost your metabolism with these HIIT workouts.",
    thumbnail: require("../../assets/images/thumbnails/three.png"),
    length: "20 mins",
  },
  {
    id: "4",
    title: "Strength Training for Beginners",
    description: "Learn the basics of strength training for building muscle.",
    thumbnail: require("../../assets/images/thumbnails/four.png"),
    length: "25 mins",
  },
  {
    id: "5",
    title: "Cardio Kickboxing Routine",
    description:
      "An energizing cardio workout that also teaches basic kickboxing.",
    thumbnail: require("../../assets/images/thumbnails/five.png"),
    length: "30 mins",
  },
  {
    id: "6",
    title: "Pilates for Core Strength",
    description: "Strengthen your core with these Pilates exercises.",
    thumbnail: require("../../assets/images/thumbnails/six.png"),
    length: "20 mins",
  },
  {
    id: "7",
    title: "Morning Yoga Flow",
    description:
      "Start your day right with this energizing morning yoga routine.",
    thumbnail: require("../../assets/images/thumbnails/seven.png"),
    length: "15 mins",
  },
  {
    id: "8",
    title: "Bodyweight Exercises for Travelers",
    description: "Stay fit on the road with these no-equipment exercises.",
    thumbnail: require("../../assets/images/thumbnails/eight.png"),
    length: "10 mins",
  },
  {
    id: "9",
    title: "Meditation and Mindfulness for Stress Relief",
    description:
      "Reduce stress and find peace with these meditation techniques.",
    thumbnail: require("../../assets/images/thumbnails/nine.png"),
    length: "10 mins",
  },
  {
    id: "10",
    title: "Advanced Stretching Techniques",
    description:
      "Improve flexibility and reduce injury risk with these stretches.",
    thumbnail: require("../../assets/images/thumbnails/ten.png"),
    length: "30 mins",
  },
];

const VideoItem = ({ title, description, thumbnail, length }) => (
  <View style={styles.itemContainer}>
    <Image source={thumbnail} style={styles.thumbnail} />

    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.length}>{length}</Text>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#74dff6",
          padding: 10,
          right: 1,
          top: 70,
          borderRadius: 15,
          zIndex: 3,
        }}
      >
        <Image
          source={require("../../assets/images/play.png")}
          style={{ height: 10, width: 10 }}
        />
      </View>
    </View>
  </View>
);

const Videos = () => (
  <View style={styles.container}>
    <FlatList
      data={videos}
      renderItem={({ item }) => (
        <VideoItem
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail}
          length={item.length}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: "#e8f7fc",
    borderBottomColor: "#cccccc",
    borderRadius: 10,
    margin: 10,
    marginBottom: 0,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "grey",
    marginTop: 5,
  },
  length: {
    marginTop: 10,
    color: "darkgrey",
    fontSize: 12,
  },
});

export default Videos;
