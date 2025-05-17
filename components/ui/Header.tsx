import { fontFamily } from "@/dimensions/fontFamily";
import { Text } from "react-native";

export default function Header() {
  return (
    <>
      <Text style={{ fontFamily: fontFamily.regular }}>Here is the header</Text>
    </>
  );
}
