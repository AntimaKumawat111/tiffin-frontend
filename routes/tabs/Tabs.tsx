import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import "../../global.css";
import OrderScreen from "@/screens/OrderScreen";
import NotificationScreen from "@/screens/NotificationScreen";
import { BottomTabParamList } from "@/types";
import HomeScreen from "@/screens/HomeScreen";

const Tab = createBottomTabNavigator<BottomTabParamList>();

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
          if (route.name === "Homescreen") {
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
      <Tab.Screen name="Homescreen" component={HomeScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
