import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { fontFamily } from "@/dimensions/fontFamily";

interface Bgcolor {
  bgColor: string;
  title: string;
  paragraph: string;
}

export default function BackgroundImage({
  bgColor,
  title,
  paragraph,
}: Bgcolor) {
  const navigation = useNavigation();
  return (
    <>
      <View>
        <View
          style={{
            position: "absolute",
            width: 250,
            height: 230,
            backgroundColor: bgColor,
            zIndex: 0,
            borderBottomRightRadius: 150,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 90,
          }}
        ></View>
        <View className="p-2">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back-outline" color="black" size={40} />
            <Text
              className={textClass}
              style={{ fontFamily: fontFamily.regular }}
            >
              {title}
            </Text>

            <Text style={style.paragraphClass}>{paragraph}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const textClass = "text-4xl pl-2  mt-5 capitalize ";
// const paragraphClass = "pl-2 text-gray-500 mt-5 capitalize";

const style = StyleSheet.create({
  paragraphClass: {
    paddingLeft: 2,
    color: "gray",
    textTransform: "capitalize",
    marginTop: 5,
    fontFamily: fontFamily.nunito,
  },
});
