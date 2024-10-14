import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { Category } from "../../models";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Text, View } from "react-native";

const CategoryBox = ({ item, active }: { item: Category; active: Category }) => {
  return (
    <View style={[styles.categoryBoxView, item.name == active.name && styles.activeStyle]}>
      <Text style={styles.categoryBoxText}>{item.name}</Text>
    </View>
  );
};

const Index = ({ category }: { category: Category }) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      style={styles.scrollMain}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={true}
    >
      {categories?.map((item) => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default Index;
