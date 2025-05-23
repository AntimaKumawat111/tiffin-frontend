import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { fontFamily } from "@/utils/fontFamily";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { getProduct } from "../redux/slice/ProductSlice";
import { color } from "@/utils/colors";
import { baseurl } from "@/redux/config/config";
import Images from "@/components/ui/Image";

interface CardProps {
  image: string;
  name: string;
  description: string;
  price: number;
  _id: string;
}

function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const productState = useSelector((state: RootState) => state.product);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (!productState.isLoading && productState.data?.products) {
      setProducts(productState.data.products);
    }
  }, [productState]);

  if (productState.isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={style.topContainer}>
      <ScrollView style={style.main}>
        <View style={style.headerClass}>
          <Text style={style.title}>Tiffin{"\n"}Express</Text>
          <TouchableOpacity style={style.iconClass}>
            <FontAwesome5 name="user-alt" size={30} color="white" />
          </TouchableOpacity>
        </View>

        {products &&
          products.length > 0 &&
          products.map((data: CardProps) => (
            <Card
              _id={data._id}
              image={data.image}
              name={data.name}
              description={data.description}
              price={data.price}
            />
          ))}
      </ScrollView>

      {/* Floating button */}
      <View style={style.floatingButtonContainer}>
        <TouchableOpacity
          style={style.floatingButton}
          onPress={() => {
            setIsModalVisible(true);
          }}
        >
          <FontAwesome
            name={isModalVisible ? "close" : "plus"}
            size={35}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity
          style={style.modalBackground}
          activeOpacity={1}
          onPress={() => setIsModalVisible(false)}
        >
          <View style={style.modalContent}>
            <TouchableOpacity style={style.innderContainer}>
              <MaterialIcons
                name="dinner-dining"
                size={30}
                color={color.cyberYellow}
              />
              <Text style={style.modalText}>Subscription</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.innderContainer}>
              <Ionicons name="call" size={30} color={color.cyberYellow} />
              <Text style={style.modalText}>Call us</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

function Card(props: CardProps) {
  return (
    <View style={style.card}>
      <View style={style.imageSection}>
        <Images url={`${baseurl}/uploads/${props.image}`} style={style.image} />
        <Text style={style.cardTitle}>{props.name} </Text>
        <Text style={style.cardDescription}>{props.description} </Text>
      </View>
      <Button leftValue="Order Now" rightValue={`₹ ${props.price}`} />
    </View>
  );
}

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

  card: {
    marginTop: 20,
  },

  imageSection: {
    borderColor: color.grayLight,
    borderWidth: 1,
    marginBottom: 20,
    paddingBottom: 10,
  },

  image: {
    width: "auto",
    height: 245,
    objectFit: "cover",
    borderWidth: 0.5,
    borderColor: color.grayLight,
  },

  cardTitle: {
    fontSize: 24,
    fontFamily: fontFamily.nunitoSemiBold,
    marginLeft: 10,
    marginTop: 5,
  },

  cardDescription: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: fontFamily.nunitoSemiBold,
    color: color.grayLight,
  },

  floatingButtonContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
    zIndex: 999,
    width: "auto",
  },

  floatingButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 9,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  modalContent: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    bottom: 160,
    right: 25,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: 208,
    height: 164,
  },

  innderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "black",
    height: 55,
    paddingHorizontal: 10,
    gap: 5,
  },

  modalText: {
    color: color.cyberYellow,
    fontFamily: fontFamily.nunitoSemiBold,
    fontSize: 20,
  },

  topContainer: {
    flex: 1,
  },
});

export default HomeScreen;
