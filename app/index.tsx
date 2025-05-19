import { View, Text, StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import GetOtp from "./getOtp";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  return (
    // <View >
    // <GetOtp />
    <GetOtp navigation={navigation} />
    // </View>
  );
}

const style = StyleSheet.create({
  main: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
