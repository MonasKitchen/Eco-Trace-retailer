import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white -mt-6 justify-center items-center px-6">
      {/* Logo / Icon */}
      <View className="items-center">
        <Text className="text-5xl">🌱</Text>
        <Text className="text-3xl font-bold text-black mt-2">EcoTrace</Text>
        <View className="w-16 h-[1px] bg-gray-300 mt-2" />
        <Text className="text-center text-[4vw] text-gray-600 mt-2">
          A all-in-one plastic problem{"\n"}solver and tracker
        </Text>
      </View>

      {/* Image */}
      <View className="mt-6 rounded-xl overflow-hidden">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
          }}
          className="w-80 h-80 rounded-xl"
          resizeMode="cover"
        />
      </View>

      {/* Button */}
      <TouchableOpacity className="bg-green-600 rounded-lg px-6 py-3 mt-6">
        <Link href={"/roles"}>
        <Text className="text-white font-semibold text-base">
          Start you journey
        </Text>
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
