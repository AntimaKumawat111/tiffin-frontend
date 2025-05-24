import React, { useEffect, useLayoutEffect, useState } from "react";
import { profile, updateName } from "../redux/slice/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AppDispatch, RootState } from "@/redux/store";
import { color } from "@/utils/colors";
import Button from "@/components/ui/Button";
import { fontFamily } from "@/utils/fontFamily";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeStackParamList } from "@/types";

export default function ProfileScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const profilestate = useSelector((state: RootState) => state.profile);
  const [isModalVisible, setModalVisible] = useState(false);
  const [changeName, setChangeName] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, "Profile">>();

  useEffect(() => {
    dispatch(profile());
  }, []);

  const user = profilestate.data?.user;

  const handleEditPress = () => {
    setModalVisible(true);
  };

  const handleGoBack = () => {
    navigation.navigate("Homescreen");
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Dynamically set headerRight
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleEditPress}>
          <MaterialIcons name="edit" size={30} color="black" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="chevron-back-outline" color="black" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (profilestate.isLoading) return <Text>Loading...</Text>;

  const hanldeChangeName = () => {
    if (changeName.length > 0 && changeName !== "") {
      dispatch(updateName({ fullName: changeName }));
      setModalVisible(false);
    }
  };

  return (
    <View style={style.main}>
      <View style={style.header}>
        <View style={style.iconClass}>
          <FontAwesome5 name="user-alt" size={35} color="white" />
        </View>
        {user ? (
          <View>
            <Text style={style.userName}>
              {user.fullName ? user.fullName : <Text>Not given</Text>}
            </Text>
            <Text style={style.mobile}>+91 {user.mobile}</Text>
          </View>
        ) : null}
      </View>

      <View style={style.addressContainer}>
        <View style={style.locationIcon}>
          <Ionicons name="location" size={30} color="black" />
        </View>
        {user?.addresses ? (
          <View>
            <FlatList
              data={user.addresses}
              renderItem={({ item }) => (
                <View style={style.addressList}>
                  <Text style={style.label}>Label: {item.label}</Text>
                  <Text style={style.innerLabel}>
                    Street:
                    <Text style={style.addressText}>{item.street}</Text>{" "}
                  </Text>
                  <Text style={style.innerLabel}>
                    City:
                    <Text style={style.addressText}>{item.city}</Text>{" "}
                  </Text>
                  <Text style={style.innerLabel}>
                    Pincode:
                    <Text style={style.addressText}>{item.pincode}</Text>{" "}
                  </Text>
                  {/* </View> */}
                </View>
              )}
              keyExtractor={(item) => item._id}
            />
          </View>
        ) : (
          <Text>Not address avaliable</Text>
        )}
      </View>

      {/* <Button leftValue="Change Address" /> */}
      {/* <Button leftValue="Change Number" /> */}

      <Modal visible={isModalVisible} transparent animationType="fade">
        <TouchableOpacity
          style={style.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={style.modalOverlay}>
            <View style={style.modalContent}>
              <TextInput
                placeholder="Change name"
                value={changeName}
                onChangeText={(text) => setChangeName(text)}
                style={style.input}
              />

              <Button leftValue="Change name" onClick={hanldeChangeName} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 15,
    gap: 10,
  },

  iconClass: {
    backgroundColor: "black",
    padding: 10,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  locationIcon: {
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "flex-end",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: color.goldenYellow,
  },

  addressContainer: {
    gap: 15,
  },

  addressList: {
    flex: 1,
    marginTop: 15,
    width: "auto",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    margin: 1,
  },

  label: {
    fontSize: 20,
    fontFamily: fontFamily.nunitoSemiBold,
    color: color.darkPacificBlue,
  },

  innerLabel: {
    fontSize: 18,
    fontFamily: fontFamily.nunitoSemiBold,
  },

  addressText: {
    color: color.grayLight,
    fontFamily: fontFamily.nunitoSemiBold,
  },

  userName: {
    fontSize: 31,
    fontFamily: fontFamily.nunitoMedium,
  },
  mobile: {
    color: color.grayLight,
    fontSize: 22,
    fontFamily: fontFamily.nunitoMedium,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    gap: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: color.grayLight,
    paddingHorizontal: 15,
  },
});
