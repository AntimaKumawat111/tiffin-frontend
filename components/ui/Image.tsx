import { Text, View } from "react-native";
import { Image } from "expo-image";

interface ImageProps {
  url: string;
  style?: object;
}

export default function Images({ url, style }: ImageProps) {
  return (
    <>
      <Image
        source={{
          uri: `${url}`,
        }}
        contentFit="cover"
        transition={1000}
        // style={{ width: 200, height: 200 }}
        style={style}
      />
    </>
  );
}
