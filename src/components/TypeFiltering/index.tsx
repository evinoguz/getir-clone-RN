import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const TypeBox = ({ item, active, onPress }: { item: string; active: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      style={[styles.boxTouch, item == active ? styles.activeTouch : styles.passiveTouch]}
      onPress={onPress}
    >
      <Text style={[styles.boxText, item == active && styles.activeText]}>{item}</Text>
    </TouchableOpacity>
  );
};

const Index = () => {
  const [category, setCategory] = useState<string>("Birlikte İyi Gider");

  return (
    <ScrollView
      style={styles.scrollMain}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      bounces={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"]?.map((item, index) => (
        <TypeBox key={index} item={item} active={category} onPress={() => setCategory(item)} />
      ))}
    </ScrollView>
  );
};

export default Index;
