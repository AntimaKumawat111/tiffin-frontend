import BackgroundImage from "@/components/ui/BackgroundImage";
import React from "react";
import { Text, View } from "react-native";

function OrderScreen() {
  return (
    <View>
      <BackgroundImage
        bgColor="orange"
        title="Subscription"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo enim quis, quasi beatae, repellendus repudiandae veniam excepturi obcaecati quos harum minus libero ipsum eaque eveniet aspernatur modi, ut optio?"
      />
    </View>
  );
}

export default OrderScreen;
