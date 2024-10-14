import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import CartScreen from "../screens/CartScreen";

const getirlogo = require("../../assets/getirlogo.png");
import styles from "./styles";
import { AntDesign, Foundation, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { connect, Connect } from "react-redux";
import { Product } from "../models";
import * as actions from "../redux/actions/cartAction";
const Stack = createStackNavigator();

const MyStackNavigator = ({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  cartItems: { product: Product; quantity: number }[];
  clearCart: () => void;
}) => {
  const tabHiddenRoutes = ["ProductDetail", "CartScreen"];
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

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

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color={"white"} />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image
              // resizeMode="contain"
              style={styles.headerTitle}
              source={getirlogo}
            />
          ),
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryFilterScreen}
        options={{
          headerTitle: () => <Text style={styles.headerTitleText}>Ürünler</Text>,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={styles.headerRightTouch}>
              <Image style={styles.headerRightImage} source={require("../../assets/cart.png")} />
              <View style={styles.headerRightImageView} />
              <View style={styles.headerRightView}>
                <Text>
                  {"\u20BA"}
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerTitle: () => <Text style={styles.headerTitleText}>Ürün Detayı</Text>,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color={"white"} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerRight} onPress={() => navigation.goBack()}>
              <Foundation name="heart" size={24} color={"#32177a"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTitle: () => <Text style={styles.headerTitleText}>Sepetim</Text>,
          headerLeft: () => (
            <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.goBack()}>
              <Ionicons name="close" size={24} color={"white"} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.headerRight} onPress={() => clearCart()}>
              <MaterialCommunityIcons name="trash-can" size={20} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

function HomeNavigator({ navigation, route, cartItems, clearCart }: { clearCart: () => void }) {
  return <MyStackNavigator navigation={navigation} route={route} cartItems={cartItems} clearCart={clearCart} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
