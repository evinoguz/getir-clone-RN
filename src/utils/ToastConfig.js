import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import Toast from "react-native-toast-message";
const { width, height } = Dimensions.get("window");

const CustomToast = ({ text1, text2, ...rest }) => (
  <View style={[styles.customToast, { width: width, height: height * 0.09, top: 0 }]}>
    <Text style={styles.text1}>{text1}</Text>
    {text2 ? <Text style={styles.text2}>{text2}</Text> : null}
  </View>
);
const toastConfig = {
  success: (props) => <CustomToast {...props} />,
  info: (props) => <CustomToast {...props} />,
};

const ToastConfig = () => {
  return (
    <>
      <Toast config={toastConfig} />
    </>
  );
};

const styles = StyleSheet.create({
  customToast: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    alignSelf: "center",
    marginHorizontal: 10,
    borderLeftWidth: 6,
    borderBottomWidth: 1,
    borderColor: "#5C3EBC",
  },
  text1: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    color: "black",
    fontSize: 14,
    fontWeight: "semibold",
  },
});

export default ToastConfig;
