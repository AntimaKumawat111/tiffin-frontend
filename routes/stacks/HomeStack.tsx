import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../tabs/Tabs";
import ProfileScreen from "@/screens/ProfileScreen";
import { HomeStackParamList } from "@/types";
import SubscriptionScreen from "@/screens/SubscriptionScreen";

export default function HomeStack() {
  const Stack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            marginTop: 45,
            flex: 1,
          },
          statusBarHidden: true,
          headerTransparent: true,
          animation: "fade_from_bottom",
        }}
      >
        {/* Match name prop with type definition */}
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="Subscription"
          component={SubscriptionScreen}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
