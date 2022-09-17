import React from "react";
import { categoryFor } from "../../../constants/category";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import CategoryHeader from "../categoryHeader/categoryHeader";

const CategoryPage = ({ categoryUrl, productAll }) => {
  const category = categoryFor.filter((item) => item.url === categoryUrl);

  return (
    <ComponentContainer>
      <h2>CategoryPage</h2>
      <CategoryHeader
        category={category}
        categoryUrl={categoryUrl}
        productAll={productAll}
      />
    </ComponentContainer>
  );
};

export default CategoryPage;
