// app/login.tsx
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: LoginProps) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login screen</Text>
      <Button 
        title="Go to Tabs"
        onPress={() => navigation.navigate("Tabs")}
      />
    </View>
  );
}