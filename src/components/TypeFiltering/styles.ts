import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollMain: {
    width: width,
    height: height * 0.072,
    flexDirection: "row",
    paddingVertical: height * 0.014,
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  boxTouch: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginRight: 12,
    borderRadius: 6,
    height: height * 0.044,
  },
  activeTouch: {
    backgroundColor: "#5C3EBC",
  },
  passiveTouch: {
    borderWidth: 1.3,
    borderColor: "#f0eff7",
  },
  boxText: {
    fontSize: 12,
    color: "#7849F7",
    fontWeight: "600",
  },
  activeText: {
    color: "white",
  },
});

export default styles;
