import { Dimensions, StyleSheet, View } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    backgroundColor: "white",
  },
  container: {
    width: width * 0.9,
    height: height * 0.13,
    marginHorizontal: width * 0.04,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgrey",
  },
  main1: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgView: {
    borderWidth: 0.45,
    borderColor: "lightgray",
    borderRadius: 8,
    padding: 4,
  },
  img: {
    width: height * 0.09,
    height: height * 0.09,
  },
  infoView: {
    marginLeft: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    maxWidth: width * 0.46,
  },
  volume: {
    fontSize: 12,
    marginTop: 3,
    color: "#848897",
    fontWeight: "600",
  },
  cart: {
    flexDirection: "row",
    marginTop: 6,
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
    fontSize: 14,
  },
  main2: {
    shadowOpacity: 0.4,
    shadowColor: "gray",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: width * 0.21,
    borderColor: "lightgray",
    borderWidth: 0.5,
    height: height * 0.037,
    elevation: 1, // Android için
  },
  decrease: {
    flex: 1,
    alignItems: "center",
  },
  increase: {
    flex: 1,
    alignItems: "center",
  },
  count: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5D3EBD",
    color: "white",
    height: height * 0.037,
  },
  countText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
});

export default styles;
