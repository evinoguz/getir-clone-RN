import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

type categoryItemProps = {
  item: Category;
};
const Index = ({ item }: categoryItemProps) => {
  const navigation = useNavigation();
  const defaultImageUri = "https://example.com/default-image.png";
  return (
    <TouchableOpacity
      testID="category-item"
      onPress={() => navigation.navigate("CategoryDetail", { category: item })}
      style={styles.container}
    >
      <Image
        source={{ uri: item.src || defaultImageUri }} // Varsayılan resim
        style={styles.img}
      />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Index;
