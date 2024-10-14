import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  buttonStyle: {
    width: 58,
    height: 58,
    backgroundColor: "#5C3EBC",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 33,
    marginTop: -8,
    borderWidth: 3,
    borderColor: "white",
  },
  headerStyle: {
    backgroundColor: "#5C3EBC",
  },
  headerTitle: {
    width: 70,
    height: 30,
  },
  headerTitleText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
  },
  headerLeft: {
    paddingLeft: 12,
  },
  headerRight: {
    paddingRight: 12,
  },
  headerRightTouch: {
    marginRight: width * 0.03,
    backgroundColor: "white",
    width: width * 0.22,
    height: 33,
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
  },
  headerRightImage: {
    width: 23,
    height: 23,
    marginLeft: 6,
  },
  headerRightImageView: {
    width: 4,
    height: 33,
    backgroundColor: "white",
  },
  headerRightView: {
    flex: 1,
    height: 33,
    backgroundColor: "#F3EFFE",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRightText: {
    color: "#5D3EBD",
    fontWeight: "bold",
    fontSize: 12,
  },
});

export default styles;
