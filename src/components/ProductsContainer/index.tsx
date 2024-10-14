import React from "react";
import { Text, View } from "react-native";
import ProductItem from "../../components/ProductItem";
import productsGetir from "../../../assets/productsGetir";
import styles from "./styles";

const Index = () => {
  return (
    <View>
      <View style={styles.container}>
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={styles.bar}>Çubuk</Text>
      <View style={styles.container}>
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default Index;
