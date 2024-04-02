import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";

const banner = require("../../assets/images/BG.png");
const fire = require("../../assets/images/fire.png");
const model = require("../../assets/images/model.png");

const Banner = () => {
  const shakeAnimation = useRef(new Animated.Value(0)).current; // Initial value for opacity

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnimation, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [shakeAnimation]);

  return (
    <>
      <ImageBackground style={styles.banner} source={banner}>
        <View style={styles.bannerContainer}>
          <Link href="/exercises">
            <Text style={styles.offer}>LOG YOUR WORKOUT</Text>
          </Link>

          <View style={styles.rowLabel}>
            <Animated.View
              style={[
                styles.fireContainer,
                { transform: [{ translateX: shakeAnimation }] },
              ]}
            >
              <Image
                source={fire}
                resizeMode="contain"
                style={styles.fireImage}
              />

              <Text style={styles.offerText}>don't lose your streak!</Text>
            </Animated.View>
          </View>
        </View>
      </ImageBackground>
      <Image source={model} style={styles.model} resizeMode="contain" />
    </>
  );
};

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
  fireImage: { height: 40, width: 40, alignSelf: "center", margin: 5 },
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
    right: -10,
    bottom: 0,
    zIndex: 10,
    height: 200,
    width: 200,
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
  screen: { margin: "5%" },
  offer: {
    color: "#006796",
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    marginLeft: -1,
  },
  offerText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins-Italic",
    marginLeft: 0,
  },

  rowLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  fireContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Banner;
