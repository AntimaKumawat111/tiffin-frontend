import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "../../global.css";
import HomeScreen from "@/screens/HomeScreen";
import OrderScreen from "@/screens/OrderScreen";
import NotificationScreen from "@/screens/NotificationScreen";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false}}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="OrderScreen" component={OrderScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
