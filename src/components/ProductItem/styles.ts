import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  touch: {
    width: width * 0.28,
    height: height * 0.24,
    marginTop: 12,
    marginLeft: 12,
    marginBottom: 6,
  },
  image: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 12,
    borderWidth: 0.1,
    borderColor: "gray",
  },
  cart: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    gap: 4,
  },
  price: {
    fontSize: 11,
    color: "#747990",
    textDecorationLine: "line-through",
  },
  discountedPrice: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 12,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    marginTop: 5,
  },
  volume: {
    color: "#747990",
    fontSize: 12,
    marginTop: 4,
    fontWeight: "500",
  },
  addButton: {
    width: 30,
    height: 30,
    borderWidth: 0.3,
    borderColor: "lightgray",
    backgroundColor: "white",
    position: "absolute",
    right: -6,
    top: -6,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.8,
  },
});

export default styles;
