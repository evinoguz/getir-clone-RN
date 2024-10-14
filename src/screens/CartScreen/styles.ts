import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  f: {
    fontWeight: "600",
  },
  container: {
    flex: 1,
  },
  flat: {},
  scroll: {
    height: height * 0.4,
    backgroundColor: "white",
  },
  recommendedText: {
    padding: 15,
    fontWeight: "bold",
    color: "#5D3EBD",
  },
  btnView: {
    height: height * 0.12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
    backgroundColor: "#f8f8f8",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  touchBtn: {
    height: height * 0.06,
    flex: 3,
    backgroundColor: "#5D3EBD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  touchText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  priceView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    height: height * 0.06,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  priceText: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
