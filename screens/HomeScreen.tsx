import { fontFamily } from "@/utils/fontFamily";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HomeScreen() {
  return (
    <View style={style.main}>
      <View style={style.headerClass}>
        <Text style={style.title}>Tiffin{"\n"}Express</Text>
        <TouchableOpacity style={style.iconClass}>
          <FontAwesome5 name="user-alt" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Card />
    </View>
  );
}

export default HomeScreen;

const style = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 15,
    height: "auto",
  },

  title: {
    fontSize: 40,
    fontFamily: fontFamily.yesevaOne,
  },

  headerClass: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconClass: {
    backgroundColor: "black",
    padding: 10,
  },
});

function Card() {
  return (
    <View>
      <Text>Here will be product cards</Text>
    </View>
  );
}
