import { fontFamily } from "@/utils/fontFamily";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Bgcolor {
  bgColor: string;
  title: string;
  paragraph: string;
}

export default function BGImage({ bgColor, title, paragraph }: Bgcolor) {
  const navigation = useNavigation();
  return (
    <View>
      <View style={(style.bgImage, { backgroundColor: bgColor })} />
      <View className="p-2">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-outline" color="black" size={40} />
          <Text style={style.textClass}>{title}</Text>
          <Text style={style.paragraphClass}>{paragraph}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  bgImage: {
    position: "absolute",
    width: 250,
    height: 230,
    zIndex: 0,
    borderBottomRightRadius: 150,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 90,
  },
  textClass: {
    fontSize: 40,
    paddingLeft: 2,
    marginTop: 5,
    textTransform: "capitalize",
  },
  paragraphClass: {
    paddingLeft: 2,
    color: "gray",
    textTransform: "capitalize",
    marginTop: 5,
    fontFamily: fontFamily.nunito,
  },
});
