import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

function Index() {
  return (
    <View testID="header-main" style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image style={styles.image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
        <View style={styles.headerOneView}>
          <Text testID="place-text" style={styles.title11}>
            Ev
          </Text>
          <Text style={styles.title12}>Dede Paşa Yenişehir mahallesi 251...</Text>
          <Entypo testID="right-icon" name="chevron-right" size={22} color="#5D3EBD" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={styles.title21}>TVS</Text>
          <Text style={styles.title22}>
            15<Text style={styles.title23}>dk</Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default Index;
