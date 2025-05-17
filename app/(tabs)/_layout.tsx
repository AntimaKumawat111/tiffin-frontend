// import { ScrollView, StyleSheet, Text } from "react-native";

// export default function TabLayout() {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <Text>this is tab screen</Text>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     paddingTop: 30,

//     paddingHorizontal: 15,
//   },
// });

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "../../global.css";
import HomeScreen from "@/screens/HomeScreen";
import OrderScreen from "@/screens/OrderScreen";
import NotificationScreen from "@/screens/NotificationScreen";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="OrderScreen" component={OrderScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
    </Tab.Navigator>
  );
}
