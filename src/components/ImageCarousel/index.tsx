import React, { useRef, useState } from "react";
import { FlatList, Image, View } from "react-native";
import styles from "./styles";

const Index = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={images}
        renderItem={(image) => <Image style={styles.img} source={{ uri: image.item }} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={styles.snap.width}
        snapToAlignment="center"
        decelerationRate="fast"
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <View>
        <View style={styles.dotMain}>
          {images?.map((_, i) => (
            <View key={i} style={[styles.dot, activeIndex == i ? styles.dotActive : styles.dotPassive]} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Index;
