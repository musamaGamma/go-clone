import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import { TextInput } from "react-native";
import colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [phone, onPhoneChange] = useState();

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Home");
  };
  return (
    <AuthLayout>
      <View className="p-6 space-y-4">
        <Text className="font-semibold">Login with your mobile number</Text>
        <View className="flex-row items-center p-1 space-x-2 border rounded-md border-[#ddd]">
          <Text className="font-semibold">+249</Text>
          <TextInput
            keyboardType="phone-pad"
            placeholder="mobile number"
            className="w-full"
            value={phone}
            onChangeText={onPhoneChange}
          />
        </View>
        <TouchableOpacity
          className="rounded-md shadow p-2"
          onPress={handleLogin}
          style={{ backgroundColor: colors.primary }}>
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}
