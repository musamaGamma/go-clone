import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import WebView from "react-native-webview";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Browser = () => {
  const [url, setUrl] = useState("https://directions-chi.vercel.app/");

  const webViewRef = useRef(null);
  // useEffect(() => {
  //   // Set up a data usage monitor that runs every second
  //   const intervalId = setInterval(() => {
  //     if (webViewRef.current) {
  //       webViewRef.current.injectJavaScript(`
  //         const networkEntries = performance.getEntriesByType('resource');
  //         const networkTransferSizes = networkEntries.map(entry => entry.transferSize);
  //         const dataUsage = networkTransferSizes.reduce((total, size) => total + size, 0);

  //         window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'dataUsage', data: dataUsage }));
  //       `);
  //     }
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  const handleMessage = (event) => {
    const { data } = event.nativeEvent;

    // try {
    //   const { type, data: usageData } = JSON.parse(data);
    //   if (type === "dataUsage") {
    //     setTotalDataUsage(totalDataUsage + usageData);
    //     if (totalDataUsage >= 50 * 1024 * 1024) {
    //       // Trigger an event
    //     }
    //   }
    // } catch (error) {
    //   console.log("Failed to parse message", error);
    // }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }} className=" bg-white">
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="bg-white p-2 left-16 top-4 shadow shadow-black rounded-full absolute z-50">
        <Icon name="chevron-back" color="black" size={30} />
      </TouchableOpacity>
      <WebView
        source={{ uri: url }}
        ref={webViewRef}
        onMessage={handleMessage}

        // onLoadProgress={handleLoadProgress}
      />
    </SafeAreaView>
  );
};

export default Browser;
