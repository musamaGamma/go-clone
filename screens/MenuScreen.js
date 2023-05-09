import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import HalfCircle from "../components/HalfCircle";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
export default function MenuScreen() {
  const width = 120;
  const left = Dimensions.get("window").width / 2 - width / 2;

  const navigation = useNavigation();
  return (
    <View className="bg-white min-h-screen">
      <HalfCircle radius={300} color="#ddd" strokeWidth={1} />
      <TouchableOpacity
        className="absolute  top-2  left-4"
        onPress={() => navigation.navigate("Home")}>
        <Icon name="chevron-back" color="white" size={30} />
      </TouchableOpacity>

      <View
        className=" rounded-full bg-[#EEEEEE] justify-end items-center shadow shadow-black absolute top-[120] "
        style={{ left: left, width, height: 120 }}>
        <Icon name="person" color="#8E8E8E" size={100} />
      </View>
      <View className="items-center  mt-16 pt-2 space-y-2">
        <Text className="font-bold text-xl capitalize">Mustafa osama</Text>
        <View className="flex-row items-center space-x-1">
          <Icon name="call" color="#8C8C8C" />
          <Text className="text-[#8C8C8C] font-bold">+249127092742</Text>
        </View>
      </View>
      <View className="items-center mt-5 space-y-40">
        <Card
          classes="flex-row p-3 mb-5 justify-between items-center w-[85%]"
          opacity={0.3}>
          <View className="flex-row items-center space-x-2">
            <Icon name="car-sport" size={20} />
            <Text className="font-bold ">GO Rides</Text>
          </View>

          <Icon name="chevron-forward" size={15}></Icon>
        </Card>
        <Card
          classes="flex-row p-3 mb-5 justify-between items-center w-[85%]"
          opacity={0.3}>
          <View className="flex-row items-center space-x-2">
            <Icon name="bus" size={20} />
            <Text className="font-bold">BUS Bookings</Text>
          </View>

          <Icon name="chevron-forward" size={15}></Icon>
        </Card>
        <Card
          classes="flex-row p-3 mb-5 justify-between items-center w-[85%]"
          opacity={0.3}>
          <View className="flex-row items-center space-x-2">
            <Icon name="wallet-outline" size={20} />
            <Text className="font-bold">GO Pay</Text>
          </View>

          <Text className="font-bold text-[#568E45]">407 SDG</Text>
        </Card>
        <Card
          classes="flex-row p-3 mb-5 justify-between items-center w-[85%]"
          opacity={0.3}>
          <View className="flex-row items-center space-x-2">
            <Icon name="notifications-outline" size={20} />
            <Text className="font-bold">Notifications</Text>
          </View>

          <Icon name="chevron-forward" size={15}></Icon>
        </Card>
        <Card
          classes="flex-row p-3 mb-5 justify-between items-center w-[85%]"
          opacity={0.3}>
          <View className="flex-row items-center space-x-2">
            <Icon name="help-circle" size={20} />
            <Text className="font-bold capitalize">help & support</Text>
          </View>

          <Icon name="chevron-forward" size={15}></Icon>
        </Card>
        <Card
          classes="flex-row p-3 mb-5 justify-between items-center w-[85%]"
          opacity={0.3}>
          <View className="flex-row items-center space-x-2">
            <Icon name="settings" size={20} />
            <Text className="font-bold capitalize">Settings</Text>
          </View>

          <Icon name="chevron-forward" size={15}></Icon>
        </Card>
        <Card
          onPress={() => navigation.navigate("Login")}
          classes="flex-row p-3 mb-5 justify-between items-center w-[85%]"
          opacity={0.3}>
          <View className="flex-row items-center space-x-2">
            <Icon name="log-out-outline" size={20} />
            <Text className="font-bold capitalize">Logout</Text>
          </View>

          <Icon name="chevron-forward" size={15}></Icon>
        </Card>
      </View>
    </View>
  );
}
