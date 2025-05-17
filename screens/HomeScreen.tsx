import Button from "@/components/ui/Button";
import React from "react";
import { Text, View } from "react-native";

function HomeScreen() {
  return (
    <View>
      <Button pageName="/getOtp" leftValue={"Order Now"} rightValue={"4000"} />
    </View>
  );
}

export default HomeScreen;
