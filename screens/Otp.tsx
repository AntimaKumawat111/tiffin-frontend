import Button from "@/components/ui/Button";
import { SendOtpThunk } from "@/redux/slice/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { AuthStackParamList } from "@/types";
import { fontFamily } from "@/utils/fontFamily";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { color } from "../utils/colors";

type OtpProp = NativeStackScreenProps<AuthStackParamList, "Otp">;

export default function Otp({ navigation }: OtpProp) {
  const dispatch = useDispatch<AppDispatch>();
  const phone = useSelector((state: RootState) => state.auth);

  const [userNumber, setUserNumber] = useState("");

  const saveUserNumber = async (number: any) => {
    try {
      await AsyncStorage.setItem("userNumber", number);
      console.log("User number saved");
    } catch (e) {
      console.error("Failed to save", e);
    }
  };

  const loadUserNumber = async () => {
    try {
      const number = await AsyncStorage.getItem("userNumber");
      if (number) {
        setUserNumber(number);
        return number;
      }
    } catch (e) {
      console.error("Failed to load", e);
    }
  };

  const handleClick = async () => {
    if (!userNumber) {
      return Toast.show({
        type: "error",
        text1: "Mobile number is required",
        position: "top",
      });
    }

    console.log("Sending OTP to:", userNumber);
    await saveUserNumber(userNumber);
    const storedNumber = await loadUserNumber();

    dispatch(SendOtpThunk({ mobile: storedNumber ?? "" }));
  };

  useEffect(() => {
    const handleOtpSuccess = async () => {
      if (phone.data?.otp) {
        Toast.show({
          type: "success",
          text1: `OTP value is : ${phone.data.otp}`,
        });
        try {
          await AsyncStorage.setItem("Otp", phone.data.otp);
        } catch (error) {
          console.log("Error in get otp", error);
          throw error;
        }
        navigation.navigate("Login");
      }
    };

    handleOtpSuccess();
  }, [phone.data]);

  return (
    <>
      <View style={style.main}>
        <Text style={style.title}>Tiffin{"\n"}Express</Text>
        <Text style={style.desciption}>
          Log in to Your Tiffin Express Account
        </Text>
        <Text style={style.subDesciption}>
          Enter your mobile number to order your delicious lunch options.
        </Text>

        <TextInput
          placeholder="Mobile number"
          style={style.input}
          onChangeText={setUserNumber}
        />

        <View style={style.btnClass}>
          <Button leftValue="Get Otp" onClick={handleClick} />
        </View>
      </View>
    </>
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
    fontFamily: fontFamily.nunitoSemiBold,
  },

  subDesciption: {
    marginTop: 20,
    fontSize: 24,
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
