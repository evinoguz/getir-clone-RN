import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/cartAction";
import { Product } from "../../models";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
type cartButtonType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};
const Index = ({ item, addItemToCart }: cartButtonType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        addItemToCart(item);
        navigation.navigate("CartScreen");
        setTimeout(() => {
          Toast.show({
            type: "success",
            text1: "Bilgi!",
            text2: `"${item.name}" ürünü sepete eklendi.`,
            position: "top",
            visibilityTime: 1500,
          });
        }, 1500);
      }}
      style={styles.container}
    >
      <View style={styles.buttonView}>
        <Text style={styles.buttonText}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) => dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(Index);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.11,
    backgroundColor: "white",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  buttonView: {
    backgroundColor: "#5D39C1",
    width: "90%",
    height: height * 0.06,
    marginHorizontal: "5%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
