import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartAction";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

type CartItemProps = {
  product: Product;
  quantity: number;
  addItemToCart: (a: Product) => void;
  removeFromCart: (product: Product) => void;
};
const Index = ({ product, quantity, addItemToCart, removeFromCart }: CartItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.container}>
        <View style={styles.main1}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={{ uri: product.image }} />
          </View>
          <View style={styles.infoView}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.volume}>{product.volume}</Text>
            <View style={styles.cart}>
              <Text style={styles.price}>
                <Text>{"\u20BA"}</Text>
                {product.price}
              </Text>
              <Text style={styles.discountedPrice}>
                <Text>{"\u20BA"}</Text>
                {product.discountedPrice}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.main2}>
          <TouchableOpacity
            onPress={() => {
              removeFromCart(product);
              Toast.show({
                type: "success",
                text1: "Bilgi!",
                text2: `"${product.name}" ürünü sepetten silindi..`,
                position: "top",
                visibilityTime: 1500,
              });
            }}
            style={styles.decrease}
          >
            <Text>
              {quantity > 1 ? (
                <AntDesign name="minus" size={12} />
              ) : (
                <MaterialCommunityIcons name="trash-can-outline" size={14} color="red" />
              )}
            </Text>
          </TouchableOpacity>
          <View style={styles.count}>
            <Text style={styles.countText}>{quantity}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              addItemToCart(product);
              Toast.show({
                type: "success",
                text1: "Bilgi!",
                text2: `"${product.name}" ürünü sepete eklendi.`,
                position: "top",
                visibilityTime: 1500,
              });
            }}
            style={styles.increase}
          >
            <Text>
              <AntDesign name="plus" size={12} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) => dispatch(actions.removeFromCart(product)),
    addItemToCart: (product: Product) => dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(Index);
