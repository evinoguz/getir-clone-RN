import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartAction";
import Toast from "react-native-toast-message";

type productItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};

const Index = ({ item, addItemToCart }: productItemType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate("ProductDetail", { product: item })}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.cart}>
        <Text style={styles.price}>
          <Text>{"\u20BA"}</Text>
          {item.price}
        </Text>
        <Text style={styles.discountedPrice}>
          <Text>{"\u20BA"}</Text>
          {item.discountedPrice}
        </Text>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.volume}>{item.volume}</Text>
      <TouchableOpacity
        onPress={() => {
          addItemToCart(item);
          Toast.show({
            type: "success",
            text1: "Bilgi!",
            text2: `"${item.name}" ürünü sepete eklendi.`,
            position: "top",
            visibilityTime: 1500,
          });
        }}
        style={styles.addButton}
      >
        <Entypo name="plus" size={22} color={"#5D3EBD"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) => dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(Index);
