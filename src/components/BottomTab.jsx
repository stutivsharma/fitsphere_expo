import React, { Component } from "react";
import { Image, View } from "react-native";
import { Link } from "expo-router";
import Calendar from "./Calendar";

const home = require("../../assets/images/Home.png");
const heart = require("../../assets/images/H.png");
const calendar = require("../../assets/images/Calender.png");
const profile = require("../../assets/images/User.png");
const plus = require("../../assets/images/Plus.png");

export class BottomTab extends Component {
  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 10,
          margin: 10,
          marginHorizontal: 25,
          borderRadius: 40,
          borderColor: "#006796",
          padding: 10,
          // width: '100%',
          backgroundColor: "#EDEDED",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <BottomButton
          image={home}
          imageStyle={{
            width: 40, // Adjusted for button size
            height: 40, // Adjusted for button size
            backgroundColor: "#fff",
            padding: 5,
            borderRadius: 35,
          }}
        />
        <BottomButton image={heart} />
        <BottomButton
          image={plus}
          style={{
            position: "absolute",
            left: "43%",
            top: -35,
            width: 70,
            height: 70,
            backgroundColor: "#fff",
            padding: 5,
            borderRadius: 35,
          }}
          imageStyle={{
            width: 60,
            height: 60,
            position: "absolute",

            width: 70,
            height: 70,
            backgroundColor: "#fff",
            padding: 5,
            borderRadius: 35,
          }}
        />
        <BottomButton image={calendar} />
        <BottomButton image={profile} />
      </View>
    );
  }
}

const BottomButton = ({ image, style, imageStyle }) => (
  <>
    <View
      style={[
        {
          flex: 1,
          alignSelf: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Image
        source={image}
        style={[
          {
            height: image === plus ? 40 : 20,
            width: image === plus ? 40 : 20,
          },
          imageStyle,
        ]}
      />
    </View>
    {image === home && (
      <View
        style={{
          width: "10%",
          position: "absolute",
          height: 2,
          backgroundColor: "#8860a2",
          bottom: 0,
          left: 25,
        }}
      />
    )}
  </>
);

export default BottomTab;
