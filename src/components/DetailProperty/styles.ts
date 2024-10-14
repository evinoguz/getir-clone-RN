import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  detailView: {
    paddingVertical: 12,
    borderBottomWidth: 0.4,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lastView: {
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailText: {
    color: "#687482",
    fontSize: 13,
    fontWeight: "500",
  },
  indexText: {
    color: "#4E4E4E",
    fontSize: 10.5,
    fontWeight: "400",
  },
});

export default styles;
