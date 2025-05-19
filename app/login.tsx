import { fontFamily } from "@/dimensions/fontFamily";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { color } from "../colors";
// import Button from "@/components/ui/Button";
import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { FontAwesome5 } from "@expo/vector-icons";

type HomePageProp = NativeStackScreenProps<RootStackParamList, "Tabs">;

export default function Login({ navigation }: HomePageProp) {
  const [userCode, setCode] = useState("");

  console.log("user Code is", userCode);
  return (
    <View style={style.main}>
      <Text style={style.title}>Tiffin{"\n"}Express</Text>
      <Text style={style.desciption}>Verify Your Mobile Number </Text>
      <Text style={style.subDesciption}>
        We've sent a 6-digit code to your mobile number. Please enter it below.{" "}
      </Text>

      <TextInput
        placeholder="OTP Code"
        style={style.input}
        onChangeText={setCode}
      />
      {/* <View style={style.btnClass}>
        <Button leftValue="Verify" />
      </View> */}
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate("Tabs")}
      />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    height: "auto",
  },

  title: {
    fontSize: 40,
    fontFamily: fontFamily.yesevaOne,
  },

  desciption: {
    marginTop: 40,
    fontSize: 31,
    // fontFamily: fontFamily.nunitoLight,
    fontFamily: fontFamily.nunitoSemiBold,
  },

  subDesciption: {
    marginTop: 20,
    fontSize: 24,
    // fontFamily: fontFamily.nunitoExtraLight,
    fontFamily: fontFamily.nunitoSemiBold,
    color: color.grayLight,
  },

  input: {
    marginTop: 40,
    borderWidth: 1,
    height: 50,
    borderColor: "black",
    paddingHorizontal: 20,
    fontFamily: fontFamily.nunitoExtraLight,
  },

  btnClass: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
