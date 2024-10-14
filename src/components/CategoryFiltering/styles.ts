import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollMain: {
    width: "100%",
    height: height * 0.065,
    backgroundColor: "#7849F7",
  },
  categoryBoxView: {
    paddingHorizontal: 9,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryBoxText: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
  },
  activeStyle: {
    borderBottomWidth: 2.5,
    borderBottomColor: "#FFD00C",
  },
});

export default styles;
