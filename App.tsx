import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "./redux/store";
import { fontFamily } from "./utils/fontFamily";
import AuthStack from "./routes/stacks/AuthStack";
import Toast from "react-native-toast-message";
import toastConfigs from "./utils/toastConfig";
import HomeStack from "./routes/stacks/HomeStack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login } from "./redux/authSlice";

export default function App() {
  const [loaded] = useFonts({
    [fontFamily.yesevaOne]: require("./assets/fonts/Yeseva_One/YesevaOne-Regular.ttf"),
    [fontFamily.bold]: require("./assets/fonts/Nunito/Nunito-Black.ttf"),
    [fontFamily.nunito]: require("./assets/fonts/Nunito/Nunito-Black.ttf"),
    [fontFamily.nunitoMedium]: require("./assets/fonts/Nunito/Nunito-Medium.ttf"),
    [fontFamily.nunitoLight]: require("./assets/fonts/Nunito/Nunito-Light.ttf"),
    [fontFamily.nunitoExtraLight]: require("./assets/fonts/Nunito/Nunito-ExtraLight.ttf"),
    [fontFamily.nunitoRegular]: require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
    [fontFamily.nunitoSemiBold]: require("./assets/fonts/Nunito/Nunito-SemiBold.ttf"),
  });

  if (!loaded) {
    return <Text>Loading</Text>;
  }

  return (
    <Provider store={store}>
      <MyApp />
      <Toast config={toastConfigs} />
    </Provider>
  );
}

function MyApp() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const [tokenChecked, setTokenChecked] = useState(false);

  useEffect(() => {
    AsyncStorage.clear();
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        dispatch(login()); // ✅ update Redux state if token exists
      }

      setTokenChecked(true);
    };

    checkToken();
  }, []);

  if (!tokenChecked) {
    return <Text>Checking authentication...</Text>;
  }

  return (
    <NavigationContainer>
      {isLogin ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
