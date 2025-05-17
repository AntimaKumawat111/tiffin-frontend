import { Button, Text, View } from "react-native";
import { Image } from "expo-image";

export default function ImageS() {
  return (
    <View className="border border-black">
      <Text>Here is the Bottom</Text>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        }}
        contentFit="cover"
        transition={1000}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
