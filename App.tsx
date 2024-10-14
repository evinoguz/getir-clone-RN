import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import "react-native-gesture-handler";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import ToastConfig from "./src/utils/ToastConfig";
import linking from "./src/utils/Deeplink";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
        <ToastConfig />
      </NavigationContainer>
    </Provider>
  );
}
