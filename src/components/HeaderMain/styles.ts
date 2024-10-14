import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.08,
    backgroundColor: "#F7D102",
  },
  headerOne: {
    width: "80%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "3%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftWidth: 2,
    borderLeftColor: "#F3F2FD",
  },
  title11: {
    fontWeight: "600",
    fontSize: 16,
  },
  title12: {
    fontWeight: "500",
    fontSize: 11.5,
    color: "#6E7480",
    marginLeft: 6,
    marginRight: 1,
  },
  headerTwo: {
    width: "25%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  title21: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#5D3EBD",
  },
  title22: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#5D3EBD",
  },
  title23: {
    fontSize: 16,
  },
});

export default styles;
