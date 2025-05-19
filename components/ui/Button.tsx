import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Href } from "expo-router";
import { fontFamily } from "@/dimensions/fontFamily";

interface BottomBtnProps {
  // pageName: Href; // Navigation path
  leftValue?: string | number; // Left side text
  rightValue?: string | number; // Right side textl
}

export default function Button({ leftValue, rightValue }: BottomBtnProps) {
  const hasBothValues = leftValue !== undefined && rightValue !== undefined;

  const handleClick = () => {
    if (!hasBothValues) {
      // alert(`You click the ${leftValue || rightValue} `);
      // console.warn("changedddddd");
    } else {
      console.warn("changed");
      // alert(`You click the both value btn`);
    }
  };

  return (
    <View style={style.btnMain}>
      <TouchableOpacity style={style.button} onPress={handleClick}>
        <View
          className={`flex-row ${
            hasBothValues ? "justify-between" : "justify-center"
          } px-4`}
        >
          {hasBothValues ? (
            <>
              <Text style={style.textClass}>{leftValue}</Text>
              <Text style={style.textClass}>{rightValue}</Text>
            </>
          ) : (
            <Text style={style.textClass}>{leftValue || rightValue}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  btnMain: {
    backgroundColor: "white",
    width: "auto",
  },

  button: {
    width: "auto",
    backgroundColor: "black",
    paddingVertical: 8,
  },

  textClass: {
    color: "white",
    fontSize: 26,
    fontFamily: fontFamily.nunitoSemiBold,
  },
});
