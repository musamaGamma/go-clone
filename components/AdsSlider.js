import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";

const AdsSlider = () => {
  const width = Dimensions.get("window").width;
  return (
    <View className="">
      <Carousel
        loop
        width={width}
        style={{ width: "100%" }}
        height={120}
        autoPlay={true}
        data={photos}
        scrollAnimationDuration={5000}
        onSnapToItem={(index) => null}
        renderItem={(item) => {
          return (
            <View
              className=""
              style={{
                flex: 1,
              }}>
              {/* <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text> */}
              <Image
                source={{ uri: item.item }}
                className="w-full  h-full "
                resizeMode="cover"
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const photos = [
  "https://static.vecteezy.com/system/resources/previews/019/012/275/original/easter-sale-large-decorated-chicken-egg-illustration-for-the-spring-holiday-horizontal-banner-flyer-poster-vector.jpg",
  "https://img.freepik.com/premium-psd/horizontal-website-banne_451189-110.jpg",
  "https://img.freepik.com/premium-photo/composite-image-business-people-with-headsets-using-computers_1134-14314.jpg?w=2000",
];
export default AdsSlider;
