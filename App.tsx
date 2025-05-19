import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Home from "./app/index";
import Login from "./app/login";
import TabLayout from "./app/(tabs)/_layout";
import { useFonts } from "expo-font";
import { fontFamily } from "./dimensions/fontFamily";
import { Text } from "react-native";
import GetOtp from "./app/getOtp";

// Add TypeScript types
type RootStackParamList = {
  Home: undefined;
  Login: undefined; // Capitalized to match component
  Tabs: undefined; // Capitalized to match component
  GetOtp: undefined; // Capitalized to match component
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: {
              marginTop: 45,
              flex: 1,
              // borderWidth:4,borderColor:'blue'
              // backgroundColor: "black",
            },
            statusBarHidden: true,
            headerTransparent: true,
          }}
        >
          {/* Match name prop with type definition */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="GetOtp" component={GetOtp} />
          <Stack.Screen name="Tabs" component={TabLayout} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
