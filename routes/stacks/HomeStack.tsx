import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HoomStackParamList } from "@/types";
import Tabs from "../tabs/Tabs";

export default function HomeStack() {
  const Stack = createNativeStackNavigator<HoomStackParamList>();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Homescreen"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            marginTop: 45,
            flex: 1,
          },
          statusBarHidden: true,
          headerTransparent: true,
          // animation:"fade_from_bottom"
          
        }}
        
      >
        {/* Match name prop with type definition */}
        <Stack.Screen name="Homescreen" component={Tabs} />
      </Stack.Navigator>
    </>
  );
}
