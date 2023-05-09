import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";
import Card from "../components/Card";
import Map from "../components/Map";
import * as Location from "expo-location";
import AdsSlider from "../components/AdsSlider";
import { useNavigation } from "@react-navigation/native";
import { ErrorBoundary } from "react-error-boundary";
import WebView from "react-native-webview";

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const navigation = useNavigation();
  return (
    <View className="">
      <View className="flex-row justify-between p-4">
        <Text
          style={{ color: colors.primary, fontWeight: "bold", fontSize: 30 }}>
          GO
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
          <Icon name="menu" size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center  flex-wrap ">
        <Card
          opacity={0.3}
          onPress={() => navigation.navigate("Rides")}
          style={{
            width: "40%",
            height: 100,
            marginRight: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Image
            className="h-10 w-16"
            resizeMode="contain"
            source={{
              uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569015390/assets/fa/0e26a9-9d9d-4190-ad6d-a879ccef4266/original/Select.png",
            }}
          />
          <Text className="font-bold text-xl">rides</Text>
        </Card>
        <Card
          style={{
            width: "40%",
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Image
            className="h-10 w-24"
            resizeMode="contain"
            source={require("../assets/icons/bus.png")}
          />
          <Text className="font-bold text-xl">bus</Text>
        </Card>
        <Card
          style={{
            width: "40%",
            height: 100,
            marginRight: 10,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Image
            className="h-10 w-24"
            resizeMode="contain"
            source={{
              uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
            }}
          />
          <Text className="font-bold ">Delivery</Text>
        </Card>
        <Card
          style={{
            width: "40%",
            height: 100,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Image
            className="h-10 w-10"
            resizeMode="contain"
            source={{
              uri: "https://png.pngtree.com/png-vector/20191113/ourlarge/pngtree-ticket-icon-flat-style-png-image_1977183.jpg",
            }}
          />
          <Text className="font-bold ">tickets and events</Text>
        </Card>
      </View>

      <View className="items-center mt-10">
        <Card
          opacity={0.4}
          onPress={() => navigation.navigate("Rides")}
          style={{ height: 220, width: "83%", padding: 20, paddingBottom: 10 }}>
          <Text className="font-bold">Hi mustafa, book your next ride</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Rides")}
            className="flex-row items-center bg-[#F4F4F4] rounded-md p-2 justify-between mb-3 mt-2">
            <Text className="text-[#A2A1A6]">Set your pickup location</Text>
            <Icon name="locate" size={20} color="#A2A1A6" />
          </TouchableOpacity>

          <WebView
            style={{ flex: 1 }}
            source={{ uri: "https://directions-chi.vercel.app/provider" }}

            // onLoadProgress={handleLoadProgress}
          />
        </Card>
      </View>

      <View className="items-center mt-10">
        <Card
          style={{ height: 160, width: "83%", padding: 20, paddingBottom: 40 }}>
          <AdsSlider />
        </Card>
      </View>
    </View>
  );
}
