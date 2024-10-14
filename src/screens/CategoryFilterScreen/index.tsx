import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import ProductsContainer from "../../components/ProductsContainer";
import { Category } from "../../models";

const Index = (props) => {
  const [category, setCategory] = useState<Category>(props.route.params.category);

  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
};

export default Index;
