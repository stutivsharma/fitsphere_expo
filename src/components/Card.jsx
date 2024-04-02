import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const next = require("../../assets/images/next.png");

const Card = ({ data, index }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const targetProgress = data.status / 100;
    const increment = targetProgress / 100;

    const interval = setInterval(() => {
      setProgress((currentProgress) => {
        if (currentProgress < targetProgress) {
          return currentProgress + increment;
        } else {
          clearInterval(interval);
          return targetProgress;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [data.status]);

  return (
    <View
      style={{
        flex: 1,
        height: index === 1 ? 200 : 180,
        padding: 10,
        alignSelf: "center",
        backgroundColor: data.color,
        justifyContent: "space-between",
        marginHorizontal: 8,
        borderRadius: 10,
        shadowColor: "lightgrey",
        shadowOffset: { width: -5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
      }}
    >
      <Image source={data.image} style={{ height: 25, width: 25 }} />
      <View style={{ alignSelf: "center", margin: 5, position: "relative" }}>
        {/* Outer Circle for Total Progress */}
        <Progress.Circle
          size={60}
          progress={1}
          unfilledColor="#f0f0f0"
          color="#ededed"
          borderColor="#ededed"
          borderWidth={0}
          thickness={0}
          style={{
            position: "absolute",
          }}
        />
        {/* Inner Progress Circle */}
        <Progress.Circle
          size={60}
          progress={progress}
          showsText
          unfilledColor="transparent"
          borderColor={data.darkColor}
          color={data.darkColor}
          borderWidth={1}
          thickness={5}
          style={{
            shadowColor: "grey",
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
          }}
          textStyle={{
            fontSize: 16,
            fontFamily: "Poppins-Bold",
            fontWeight: "bold",
          }}
        />
      </View>
      {/* Additional card content */}
      <View>
        <Text style={{ fontSize: 10, fontFamily: "Poppins-Light" }}>
          {"Day     1"}
        </Text>
        <Text style={{ fontSize: 10, fontFamily: "Poppins-Light" }}>
          {"Time   20 min"}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "Poppins-Regular" }}>{data.name}</Text>
        <View
          style={{
            backgroundColor: data.lightColor,
            padding: 2,
            borderRadius: 10,
          }}
        >
          <Image
            source={next}
            style={{
              height: 12,
              width: 12,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
