import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Otp from "@/screens/Otp";
import Login from "@/screens/Login";
import { AuthStackParamList } from "@/types";

export default function AuthStack() {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Otp"
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
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
}
