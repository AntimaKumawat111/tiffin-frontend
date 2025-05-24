import { fontFamily } from "@/utils/fontFamily";
import { StyleSheet, Text, View } from "react-native";

interface Bgcolor {
  bgColor: string;
  title: string;
  paragraph: string;
}

export default function BGImage({ bgColor, title, paragraph }: Bgcolor) {
  return (
    <View>
      <View style={[style.bgImage, { backgroundColor: bgColor }]} />
      <View style={{ paddingHorizontal: 15, marginTop: 40 }}>
        <Text style={style.textClass}>{title}</Text>
        <Text style={style.paragraphClass}>{paragraph}</Text>
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
    fontFamily: fontFamily.nunitoSemiBold,
  },

  paragraphClass: {
    paddingLeft: 2,
    color: "gray",
    textTransform: "capitalize",
    marginTop: 5,
    fontSize: 19,
    fontFamily: fontFamily.nunitoMedium,
  },
});
