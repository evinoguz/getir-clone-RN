import { LogBox } from "react-native";
import * as Linking from "expo-linking";
LogBox.ignoreAllLogs();
const prefix = Linking.createURL("/");

const linking = {
  prefixes: [prefix],
  config: {
    screens: {
      Search: {
        screens: {
          CartScreen: {
            path: "cartScreen/contentId/:id",
            parse: {
              id: (id: number) => `${id}`,
            },
          },
        },
      },
    },
  },
};

export default linking;
