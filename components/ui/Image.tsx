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
        style={style}
      />
    </>
  );
}
