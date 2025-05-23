import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import "../../global.css";

import HomeScreen from "@/screens/HomeScreen";
import OrderScreen from "@/screens/OrderScreen";
import NotificationScreen from "@/screens/NotificationScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          if (route.name === "Home") {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          } else if (route.name === "Orders") {
            return <Ionicons name="time-outline" size={size} color={color} />;
          } else if (route.name === "Notification") {
            return focused ? (
              <Ionicons name="notifications" size={size} color={color} />
            ) : (
              <MaterialCommunityIcons
                name="bell-outline"
                size={size}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
