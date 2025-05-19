import { fontFamily } from "@/dimensions/fontFamily";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { color } from "../colors";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp } from "@/redux/slice/loginSlice";
import { AppDispatch, RootState } from "@/redux/store";
// import { baseurl } from "@/baseurl";

import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = { navigation: LoginScreenNavigationProp };

export default function GetOtp({ navigation }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  // const phone = useSelector()
  const phone = useSelector((state: RootState) => state.sendOtp);

  if (phone.isLoading) {
    <Text>Loading....</Text>;
  }

  // useEffect(() => {
  //   dispatch(sendOtp(storedNumber));
  // }, []);
  const [userNumber, setUserNumber] = useState("");
  const [verify, setVerify] = useState(false);
  const [userCode, setCode] = useState("");

  // console.log("user Code is", userCode);
  console.log("user number is", userNumber);
  // console.log("Baseurl is:", baseurl);

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
        setUserNumber(number); // Update state with stored value
        return number; // Return the value directly if needed
      }
    } catch (e) {
      console.error("Failed to load", e);
    }
  };

  // const handleClick = async () => {
  //   if (!userNumber) {
  //     return alert("Please enter mobile number");
  //   }

  //   const mobileNumber = async () => {
  //     try {
  //       await AsyncStorage.setItem("userNumber", userNumber);
  //       console.log("User number saved in AsyncStorage");
  //     } catch (e) {
  //       console.error("Failed to save user number", e);
  //     }
  //   };
  //   // setVerify(true);

  //    const loadUserNumber = async () => {
  //     try {
  //       const number = await AsyncStorage.getItem("userNumber");
  //       if (number !== null) {
  //         console.log("Loaded user number:", number);
  //         setUserNumber(number); // example to set state
  //       }
  //     } catch (e) {
  //       console.error("Failed to load user number", e);
  //     }
  //   };
  //   loadUserNumber();

  //   // console.log("fuasdfasd", mobileNumber);
  // };

  // useEffect(() => {
  //   const loadUserNumber = async () => {
  //     try {
  //       const number = await AsyncStorage.getItem("userNumber");
  //       if (number !== null) {
  //         console.log("Loaded user number:", number);
  //         setUserNumber(number); // example to set state
  //       }
  //     } catch (e) {
  //       console.error("Failed to load user number", e);
  //     }
  //   };

  //   loadUserNumber();
  // }, []);
  const handleClick = async () => {
    if (!userNumber) {
      return alert("Please enter mobile number");
    }

    // Save the number first
    await saveUserNumber(userNumber);

    // Then load it (optional, if you need to use it immediately)
    const storedNumber = await loadUserNumber();
    console.log("Stored number:", storedNumber); // Use the retrieved value

    dispatch(sendOtp(storedNumber));
  };

  return (
    <>
      {verify ? (
        <>
          <View style={style.main}>
            <Text style={style.title}>Tiffin{"\n"}Express</Text>
            <Text style={style.desciption}>Verify Your Mobile Number </Text>
            <Text style={style.subDesciption}>
              We've sent a 6-digit code to your mobile number. Please enter it
              below.
            </Text>
            {userNumber ? (
              <Text>Otp Send to this number +91 {userNumber}</Text>
            ) : (
              <Text>Not avaliable</Text>
            )}
            <TextInput
              placeholder="OTP Code"
              style={style.input}
              onChangeText={setCode}
            />
            <View style={style.btnClass}>
              <View pointerEvents="none">
                <Button leftValue="Verify" />
              </View>
              <TouchableOpacity
                style={StyleSheet.absoluteFillObject}
                onPress={handleClick}
              />
            </View>
          </View>
        </>
      ) : (
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
              <View pointerEvents="none">
                <Button leftValue="Get Otp" />
              </View>
              <TouchableOpacity
                style={StyleSheet.absoluteFillObject}
                onPress={handleClick}
              />
            </View>
          </View>
        </>
      )}
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
    borderWidth: 2,
    borderColor: "red",
  },
});
