import { fontFamily } from "@/utils/fontFamily";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface BottomBtnProps {
  leftValue?: string | number; // Left side text
  rightValue?: string | number; // Right side textl
  onClick?: () => void;
}
export default function Button({
  leftValue,
  rightValue,
  onClick,
}: BottomBtnProps) {
  const hasBothValues = leftValue !== undefined && rightValue !== undefined;

  return (
    <View style={style.btnMain}>
      <TouchableOpacity style={style.button} onPress={onClick}>
        <View
          style={[
            style.container,
            hasBothValues
              ? { justifyContent: "space-between" }
              : { justifyContent: "center" },
          ]}
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
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
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
