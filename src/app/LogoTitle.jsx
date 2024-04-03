import React from "react";
import { Image } from "react-native";

const LogoTitle = ({ logoStyle }) => {
  return (
    <Image
      style={[{ width: 100, height: 30 }, logoStyle]} // Default size with override possibility
      source={require("../../assets/images/logo.png")} // Adjust the image source as necessary
    />
  );
};

export default LogoTitle;
