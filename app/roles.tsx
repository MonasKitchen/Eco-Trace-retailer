import React from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function RoleSelection() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} className="px-6">
        {/* Logo */}
        <View className="items-center mt-4">
          <Text className="text-4xl">🌱</Text>
        </View>

        {/* Title */}
        <Text className="text-2xl font-bold text-black mt-4">You are a</Text>
        <View className="h-[1px] bg-gray-300 mt-2 mb-6" />

        {/* Consumer Section */}
        <View className="items-center">
          <Image
            source={require("C:\\Users\\aksha\\OneDrive\\Desktop\\eco-trace\\assets\\images\\peep-21 1.png")}
            className="w-52 h-28"
            resizeMode="contain"
          />
          <TouchableOpacity
            // onPress={() => router.push("/consumer")}
            className="w-full border border-gray-300 rounded-lg mt-2 p-4"
          >
            <Text className="text-green-700 text-lg font-semibold">Consumer</Text>
          </TouchableOpacity>
        </View>

        {/* Seller Section */}
        <View className="items-center mt-8">
          <Image
            source={require("../assets/images/peep-standing-18.png")}
            className="w-52 h-28"
            resizeMode="contain"
          />
          <TouchableOpacity
            // onPress={() => router.push("/seller")}
            className="w-full border border-gray-300 rounded-lg mt-2 p-4"
          >
            <Text className="text-green-700 text-lg font-semibold">Seller</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity className="bg-green-600 rounded-lg py-3 mt-10 mx-6">
          <Text className="text-white font-semibold text-center text-base">Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
