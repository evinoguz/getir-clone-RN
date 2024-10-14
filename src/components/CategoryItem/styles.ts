import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  img: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 8,
  },
  container: {
    width: width * 0.24,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    color: "#616161",
  },
});

export default styles;
