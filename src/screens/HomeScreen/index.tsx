import { ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain"; 
import BannerCarousel from "../../components/BannerCarousel";
import MainCategories from "../../components/MainCategories";
import styles from "./styles";

function Index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.scroll}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}

export default Index;
