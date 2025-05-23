import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import Toast from "react-native-toast-message";
import { Provider, useDispatch, useSelector } from "react-redux";
import { login } from "./redux/slice/authSlice";
import { AppDispatch, RootState, store } from "./redux/store";
import AuthStack from "./routes/stacks/AuthStack";
import HomeStack from "./routes/stacks/HomeStack";
import { fontFamily } from "./utils/fontFamily";
import toastConfigs from "./utils/toastConfig";

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
  const dispatch = useDispatch<AppDispatch>();
  const [tokenChecked, setTokenChecked] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setHasToken(true);
        dispatch(login());
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
      {hasToken ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
