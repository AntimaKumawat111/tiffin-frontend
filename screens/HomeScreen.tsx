import { fontFamily } from "@/dimensions/fontFamily";
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
      {/* <Card /> */}
    </View>
  );
}

export default HomeScreen;

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 15,
    height: "auto",
    // borderWidth: 2,
    // borderColor: "blue",
  },

  title: {
    fontSize: 40,
    fontFamily: fontFamily.yesevaOne,
  },

  headerClass: {
    // borderWidth: 1,
    // borderColor: "blue",
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
      <Text>Hello Card</Text>
    </View>
  );
}
