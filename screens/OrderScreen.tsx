// import BackgroundImage from "@/components/ui/BGImage";
import BGImage from "@/components/ui/BGImage";
import React from "react";
import { View } from "react-native";

function OrderScreen() {
  return (
    <View>
      <BGImage
        bgColor="orange"
        title="Subscription"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut explicabo enim quis, quasi beatae, repellendus repudiandae veniam excepturi obcaecati quos harum minus libero ipsum eaque eveniet aspernatur modi, ut optio?"
      />
    </View>
  );
}

export default OrderScreen;
