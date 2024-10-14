import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  img: {
    width: width,
    height: height * 0.25,
    resizeMode: "stretch",
  },
});

export default styles;
