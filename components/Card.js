import { TouchableOpacity } from "react-native";
import React from "react";

export default function Card({
  children,
  style,
  opacity = 1,
  classes,
  ...other
}) {
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      {...other}
      style={{
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 40,
        elevation: 3,
        ...style,
      }}
      className={`bg-white   rounded-lg ` + classes}>
      {children}
    </TouchableOpacity>
  );
}
