import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";

// Sample data representing videos. Each item includes an image, title, and other relevant details.
const videoData = [
  {
    id: "video1",
    image: require("../../assets/images/couple.jpg"),
    title: "Transformation",
    duration: "45 Min",
    level: "Beginner",
  },
  {
    id: "video2",
    image: require("../../assets/images/photo2.png"),
    title: "Yoga Basics",
    duration: "30 Min",
    level: "Intermediate",
  },
  {
    id: "video3",
    image: require("../../assets/images/photo3.jpg"),
    title: "Yoga Advanced",
    duration: "30 Min",
    level: "Intermediate",
  },
];

const VideoPlay = () => {
  // Calculate the index of the last item
  const lastItemIndex = videoData.length - 1;

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <View style={{ borderRadius: 10, overflow: "hidden" }}>
        <ImageBackground
          source={item.image}
          style={{
            height: 150,
            width: 300,
          }}
        >
          <LinearGradient
            locations={[0, 1.0]}
            colors={["rgba(0,0,0,0.00)", "rgba(0,0,0,0.60)"]}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          ></LinearGradient>
          <Text
            style={{
              position: "absolute",
              bottom: 5,
              left: 10,
              fontFamily: "Poppins-Regular",
              color: "#fff",
            }}
          >
            {item.title}
          </Text>
          <View
            style={{
              position: "absolute",
              backgroundColor: "#fff",
              padding: 5,
              right: 10,
              top: 10,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/images/Star.png")}
              style={{ height: 10, width: 10 }}
            />
          </View>
        </ImageBackground>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 15,
          }}
        >
          <View
            style={{
              position: "absolute",
              backgroundColor: "#74dff6",
              padding: 10,
              right: 25,
              top: -15,
              borderRadius: 15,
              zIndex: 3,
            }}
          >
            <Image
              source={require("../../assets/images/play.png")}
              style={{ height: 10, width: 10 }}
            />
          </View>
          <Text style={{ fontFamily: "Poppins-Regular" }}>
            {item.duration} {item.level}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <Carousel
      data={videoData}
      renderItem={renderItem}
      sliderWidth={Dimensions.get("window").width}
      itemWidth={300}
      loop={true} // Enable looping
      firstItem={lastItemIndex} // Start with the last item
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    marginHorizontal: 12,
    shadowOffset: { width: -5, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: "#fff",
  },
  // Add other styles as needed
});

export default VideoPlay;
