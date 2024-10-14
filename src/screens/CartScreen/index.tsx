import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, ScrollView } from "react-native";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import styles from "./styles";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";
import { Product } from "../../models";
import { Ionicons } from "@expo/vector-icons";

const Index = ({ cartItems, route }: { route: any; cartItems: { product: Product; quantity: number }[] }) => {
  useEffect(() => {
    // if (route?.params) {
    //   console.log("Hi, message: ", route.params);
    // } else {
    //   console.log("No params passed");
    // }
  }, [route.params]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductsPrice = () => {
    let total = 0;
    let price = 0;
    cartItems.forEach((i) => {
      price = i.product.discountedPrice ? i.product.discountedPrice : i.product.price;
      total += price * i.quantity;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductsPrice();
  }, [cartItems]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledProducts = shuffleArray([...productsGetir]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <FlatList
          style={styles.flat}
          data={cartItems}
          renderItem={({ item }) => <CartItem product={item.product} quantity={item.quantity} />}
          scrollEnabled={false}
        />
        {cartItems.length === 0 && (
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
            <Ionicons name="cart-outline" size={24} color="#8B0000" />
            <Text style={{ color: "#8B0000", paddingVertical: 10 }}>Sepetiniz boş.</Text>
          </View>
        )}

        <Text style={styles.recommendedText}>Önerilen Ürünler</Text>
        <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false} bounces={true}>
          {shuffledProducts?.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.btnView}>
        <TouchableOpacity style={styles.touchBtn}>
          <Text style={styles.touchText}>Devam</Text>
        </TouchableOpacity>
        <View style={styles.priceView}>
          <Text style={styles.priceText}>
            {"\u20BA"}
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
export default connect(mapStateToProps, null)(Index);
