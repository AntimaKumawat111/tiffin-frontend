import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { color } from "../utils/colors";
import { fontFamily } from "../utils/fontFamily";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HomeStackParamList } from "@/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import BGImage from "@/components/ui/BGImage";
import Images from "@/components/ui/Image";
import Button from "@/components/ui/Button";

type SubscriptionProp = NativeStackScreenProps<
  HomeStackParamList,
  "Subscription"
>;

export default function SubscriptionScreen({ navigation }: SubscriptionProp) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalName, setModalName] = useState("today");
  const [isBottomModal, setIsBottomModal] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Homescreen")}>
          <Ionicons name="chevron-back-outline" color="black" size={30} />
        </TouchableOpacity>
      ),
    });
  });

  const handleModalVisible = (value: string) => {
    setIsModalVisible(true);
    setModalName(`${value}`);
  };

  return (
    <ScrollView>
      <View style={style.main}>
        <BGImage
          title="Subsctiption "
          bgColor={color.goldenYellow}
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit saepe obcaecati perspiciatis harum nemo ea dolore quisquam! Quod voluptatem ipsa voluptas, error sit vero minima dignissimos voluptate. Exercitationem, perferendis."
        />
      </View>
      <View style={style.container}>
        <View style={style.outerContainer}>
          <TouchableOpacity
            style={style.innerContainer}
            onPress={() => handleModalVisible("today")}
          >
            <Text style={style.dataPicerText}>Start</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={style.dataPicerText}>today</Text>
              <MaterialIcons name="calendar-month" size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleModalVisible("end")}
            style={style.innerContainer}
          >
            <Text style={style.dataPicerText}>End</Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Text style={style.dataPicerText}>end</Text>
              <MaterialIcons name="calendar-month" size={24} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.outerContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={style.imageContainer}>
              <Images
                url={
                  "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2024/04/Instant-Mango-Pickle-H1.jpg?resize=600%2C900&ssl=1"
                }
                style={style.image}
              />
              <Text style={style.imageName}>Pickle</Text>
            </View>
            <View style={style.imageContainer}>
              <Images
                url={
                  "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2024/04/Instant-Mango-Pickle-H1.jpg?resize=600%2C900&ssl=1"
                }
                style={style.image}
              />
              <Text style={style.imageName}>Pickle 2</Text>
            </View>
          </View>
        </View>

        {isModalVisible && (
          <Modal visible={isModalVisible} transparent animationType="fade">
            <TouchableOpacity
              style={style.modalOverlay}
              onPress={() => setIsModalVisible(false)}
            >
              {modalName === "today" ? <StartDatePicer /> : <DataPicker />}
            </TouchableOpacity>
          </Modal>
        )}
      </View>

      {/* bottom button and modal */}
      <View
        style={{
          paddingHorizontal: 15,
          flex: 1,
          height: "auto",
          marginTop: "auto",
        }}
      >
        {isBottomModal && (
          <Modal visible={isBottomModal} transparent animationType="fade">
            <TouchableOpacity
              style={style.bottomModalOverlay}
              onPress={() => setIsBottomModal(false)}
            >
              <TouchableOpacity activeOpacity={1} style={style.bottomModal}>
                <View>
                  <Text>here is bottom modal</Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </Modal>
        )}

        <View
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Button
            leftValue="Order Now"
            rightValue="price"
            onClick={() => setIsBottomModal(true)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

// pickle image url - https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2024/04/Instant-Mango-Pickle-H1.jpg?resize=600%2C900&ssl=1

const style = StyleSheet.create({
  main: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 30,
    gap: 20,
  },

  outerContainer: {
    borderWidth: 1,
    borderColor: color.grayLight,
    padding: 10,
    gap: 10,
  },

  innerContainer: {
    backgroundColor: color.cyberYellow,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dataPicerText: {
    fontSize: 19,
    fontFamily: fontFamily.nunitoSemiBold,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
  },

  modalContainer: {
    backgroundColor: "white",
    padding: 10,
    margin: 15,
  },

  imageContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: color.cyberYellow,
  },

  image: {
    width: 130,
    height: 130,
    objectFit: "cover",
  },

  imageName: {
    fontSize: 19,
    fontFamily: fontFamily.nunitoSemiBold,
    textAlign: "center",
    marginTop: 5,
  },

  bottomModalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  bottomModal: {
    position: "absolute",
    height: 300,
    width: "100%",
    backgroundColor: "white",
    borderWidth: 2,
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

function DataPicker() {
  return (
    <View style={style.modalContainer}>
      <Text>hello end date picker</Text>
    </View>
  );
}

function StartDatePicer() {
  return (
    <View style={style.modalContainer}>
      <Text>hello start date picker</Text>
    </View>
  );
}
