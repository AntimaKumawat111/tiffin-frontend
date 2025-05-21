import Button from "@/components/ui/Button";
import { login } from "../redux/authSlice";
import { fontFamily } from "@/utils/fontFamily";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { color } from "../utils/colors";
import { LoginThunkReducer } from "../redux/slice/LoginSlice";
import { RootState } from "@/redux/store";
import Toast from "react-native-toast-message";

export default function Login() {
  const dispatch = useDispatch();
  const loginState = useSelector((state: RootState) => state.verifyOtp);
  const [userOtp, setUserOtp] = useState("");

  const handleClick = async () => {
    try {
      const otp = await AsyncStorage.getItem("Otp");
      const userNumber = await AsyncStorage.getItem("userNumber");

      if (userOtp === otp && userNumber) {
        dispatch(
          LoginThunkReducer({
            mobile: Number(userNumber),
            otp: Number(userOtp),
          })
        );
      } else {
        Toast.show({
          type: "error",
          text1: "Otp is not matched",
        });
      }
    } catch (e) {
      console.error("Error during login:", e);
    }
  };

  useEffect(() => {
    if (loginState.isLogin && loginState.data) {
      AsyncStorage.setItem("token", loginState.data.token);
      dispatch(login());
      Toast.show({
        type: "success",
        text1: "Login successfuly !",
      });
    }
  }, [loginState.isLogin]);

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
        onChangeText={setUserOtp}
      />
      <View style={style.btnClass}>
        <Button leftValue="Verify" onClick={handleClick} />
      </View>
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
