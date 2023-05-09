import React from "react";
import { View } from "react-native";
import Svg, { Path, ClipPath, Defs, G } from "react-native-svg";

const HalfCircle = () => {
  return (
    <View
      style={{
        width: 591,
        height: 498,
        marginLeft: -116,
        marginTop: -330,
      }}>
      <Svg width="100%" height="100%" viewBox="0 0 591 498">
        <Defs>
          <ClipPath id="clip-path">
            <Path d="M591 249C591 386.519 458.7 498 295.5 498C132.3 498 0 386.519 0 249C0 111.481 132.3 0 295.5 0C458.7 0 591 111.481 591 249Z" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#clip-path)">
          <Path d="M0 0V498H591V0" fill="#568E45" />
        </G>
      </Svg>
    </View>
  );
};

export default HalfCircle;
