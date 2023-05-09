import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function AuthLayout({ children }) {
  const { name } = useRoute();

  const navigation = useNavigation();
  const width = 350;
  const left = Dimensions.get("window").width / 2 - width / 2;
  return (
    <View className="min-h-screen bg-white">
      <View className="bg-[#45A247] h-[35%] justify-center items-center">
        <Text
          className="text-white  uppercase font-bold"
          style={{ fontSize: 100 }}>
          Go
        </Text>
      </View>
      <StatusBar backgroundColor="#45A247" />
      <View
        style={{
          left,
          borderColor: "#ddd",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 40,
          elevation: 3,
          height: 250,
          width,
        }}
        className="bg-white absolute  rounded-lg  top-[25%]  z-50">
        <View
          style={{
            borderBottomColor: "#ddd",
            height: "20%",
            borderBottomWidth: 1,
          }}
          className=" flex-row  justify-between items-center">
          <TouchableOpacity
            className="flex-1 justify-center items-center h-full"
            style={[name === "Login" && styles.active]}
            onPress={() => navigation.navigate("Login", {}, false)}>
            <Text
              className="text-center  "
              style={[name === "Login" && { fontWeight: "bold" }]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 justify-center b items-center h-full"
            style={[name === "Signup" && styles.active]}
            onPress={() => navigation.navigate("Signup", {}, false)}>
            <Text
              style={[name === "Signup" && { fontWeight: "bold" }]}
              className="text-center  ">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        {/* outlet */}
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    borderBottomColor: "#45A247",
    color: "black",
    fontWeight: "bold",

    borderBottomWidth: 4,
  },
  not: {
    color: "red",
  },
});
