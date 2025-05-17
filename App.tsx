import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/index";
import Login from "./app/login";
import TabLayout from "./app/(tabs)/_layout";

// Add TypeScript types
type RootStackParamList = {
  Home: undefined;
  Login: undefined; // Capitalized to match component
  Tabs: undefined; // Capitalized to match component
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            marginTop: 45,
            flex:1,
            // borderWidth:4,borderColor:'blue'
            // backgroundColor: "black",
          },
          // statusBarHidden: true,
          headerTransparent: true,
        }}
      >
        {/* Match name prop with type definition */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tabs" component={TabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
