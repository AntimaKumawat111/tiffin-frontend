import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Href } from "expo-router";
import { fontFamily } from "@/dimensions/fontFamily";

interface BottomBtnProps {
  pageName: Href; // Navigation path
  leftValue?: string | number; // Left side text
  rightValue?: string | number; // Right side text
}

export default function Button({ leftValue, rightValue }: BottomBtnProps) {
  const hasBothValues = leftValue !== undefined && rightValue !== undefined;

  const handleClick = () => {
    if (!hasBothValues) {
      alert(`You click the ${leftValue || rightValue} `);
    } else {
      alert(`You click the both value btn`);
    }
  };

  return (
    <View style={style.btnMain}>
      <TouchableOpacity
        style={style.button}
        onPress={handleClick}
      >
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
    paddingHorizontal: 10,
  },

  button: {
    width: "auto",
    backgroundColor: "black",
    paddingVertical: 3,
  },

  textClass: {
    color: "white",
    fontSize: 25,
    fontFamily: fontFamily.nunito,
  },
});
