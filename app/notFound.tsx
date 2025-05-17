import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFound() {
  return (
    <View>
      <Text className="border text-blue-800">not found </Text>
      <Link href="/">Go to home</Link>
    </View>
  );
}
