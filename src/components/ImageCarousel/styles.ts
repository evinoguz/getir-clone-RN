import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: width,
    backgroundColor: "white",
    height: height * 0.25,
    paddingTop: 25,
  },
  list: {
    width: width * 0.5,
    height: height * 0.21,
  },
  img: {
    width: width * 0.5,
    height: height * 0.21,
    resizeMode: "stretch",
  },
  snap: {
    width: width * 0.5,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 25,
  },
  dotMain: {
    flexDirection: "row",
    alignItems: "center",
    width: 30,
    height: 12,
    justifyContent: "space-around",
  },
  dotActive: {
    backgroundColor: "#5D3EBD",
  },
  dotPassive: {
    backgroundColor: "#F0F0FD",
  },
});

export default styles;
