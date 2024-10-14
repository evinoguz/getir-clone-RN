import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { Product } from "../../models";
import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import CartButton from "../../components/CartButton";


const Index = ({route}) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    setProduct(route.params.product);
  }, [route.params.product]);

  if (!product) {
    return <ActivityIndicator color={"#5D3EBD"} />;
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <DetailBox price={product.price} name={product.name} volume={product.volume} />
        <Text style={styles.detailText}>Detaylar</Text>
        <DetailProperty />
      </ScrollView>
      <CartButton item={product} />
    </View>
  );
};

export default Index;
