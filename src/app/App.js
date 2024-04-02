import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import * as Font from "expo-font";
import { useState, useEffect } from "react";
import VideoPlay from "../components/VideoPlay";
import Card from "../components/Card";
import BottomTab from "../components/BottomTab";
import Banner from "../components/Banner";
import Header from "../components/Header";

const cycle = require("../../assets/images/cycle.png");
const yoga = require("../../assets/images/yoga.png");
const walk = require("../../assets/images/walk.png");

const fetchFonts = () => {
  return Font.loadAsync({
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Italic": require("../../assets/fonts/Poppins-Italic.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return null; // or a loading spinner, or whatever you prefer
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.screen}>
          <Header />
          <Banner />
        </View>
        <View style={{ marginHorizontal: "3%" }}>
          <Text
            style={{
              color: "#006796",
              fontSize: 24,
              fontWeight: 600,
              padding: 10,
            }}
          >
            Your Daily Progress
          </Text>
          <View style={{ flexDirection: "row" }}>
            {data.map((item, index) => (
              <Card data={item} index={index} />
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#006796",
                fontSize: 24,
                fontWeight: 600,
                padding: 10,
              }}
            >
              Learn More about Fitness
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                opacity: 0.5,
                fontSize: 12,
                marginTop: 60,
                color: "#006796",
              }}
            >
              View All
            </Text>
          </View>
          <VideoPlay />
        </View>
      </ScrollView>
      <BottomTab />
    </>
  );
}

const Label = ({ children }) => <Text style={styles.label}>{children}</Text>;
const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: { paddingHorizontal: 10, flex: 1, justifyContent: "center" },
  bigTitle: { fontSize: 16, fontFamily: "Poppins-Medium" },
  smallTitle: { fontSize: 10, fontFamily: "Poppins-Regular", opacity: 0.6 },
  image: { height: "100%", width: "100%" },
  fireImage: { height: 15, width: 15, alignSelf: "center", margin: 5 },
  banner: {
    marginTop: 20,
    padding: 30,
    resizeMode: "contain",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "row",
  },
  bannerContainer: { flex: 1 },
  label: { fontFamily: "Poppins-Medium", fontSize: 20, marginVertical: 10 },
  model: {
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 10,
    height: "75%",
    width: "50%",
    transform: [{ rotateY: "180deg" }],
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  screen: { margin: "3%" },
  offer: { color: "white", fontFamily: "Poppins-Regular", fontSize: 10 },
  offerText: { color: "white", fontSize: 16, fontFamily: "Poppins-Regular" },

  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  fireContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const data = [
  {
    name: "Cycling",
    status: 85,
    image: cycle,
    lightColor: "#f8e4d9",
    color: "#fcf1ea",
    darkColor: "#fac5a4",
  },
  {
    name: "Walking",
    status: 25,
    image: walk,
    lightColor: "#d7f0f7",
    color: "#e8f7fc",
    darkColor: "#aceafc",
  },
  {
    name: "Yoga",
    status: 85,
    image: yoga,
    lightColor: "#dad5fe",
    color: "#e7e3ff",
    darkColor: "#8860a2",
  },
];
