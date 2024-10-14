import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

type DetailBoxProps = {
  price: number;
  name: string;
  volume: string;
};
const Index = ({ price, name, volume }: DetailBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.volume}>{volume}</Text>
    </View>
  );
};

export default Index;
