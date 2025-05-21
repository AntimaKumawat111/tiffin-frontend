import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HoomStackParamList } from "@/types";
import HomeScreen from "@/screens/HomeScreen";
import Tabs from "../tabs/Tabs";

export default function HomeStack() {
  const Stack = createNativeStackNavigator<HoomStackParamList>();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            marginTop: 45,
            flex: 1,
          },
          statusBarHidden: true,
          headerTransparent: true,
        }}
      >
        {/* Match name prop with type definition */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </>
  );
}
