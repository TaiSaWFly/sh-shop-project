import React, { useEffect, useState } from "react";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import CategoryHeader from "../../ui/categoryComponents/categoryHeader/categoryHeader";
import { filterDataForTypes } from "../../../utils/filterDataForTypes";
import { products } from "../../../data/products";
import { types } from "../../../data/type";
import CategoryTypes from "../../ui/categoryComponents/categoryTypes/categoryTypes";
import ProductFilter from "../../ui/categoryComponents/productFilter/productFilter";
import Loading from "../../common/loadingComponent/loading";

const CategoryPage = ({ url, state }) => {
  const { categoryId, name } = state;
  const [categoreis, setCategory] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const getCategories = filterDataForTypes(products, types, categoryId);
      setCategory(getCategories);
    }, 900);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [categoryId]);

  return (
    <ComponentContainer>
      <h2>CategoryPage {url}</h2>
      <CategoryHeader
        url={url}
        categoryId={categoryId}
        name={name}
        loading={isLoading}
      />
      {!isLoading ? (
        <div>
          <ProductFilter />
          <CategoryTypes url={url} id={categoryId} categories={categoreis} />
        </div>
      ) : (
        <Loading />
      )}
    </ComponentContainer>
  );
};

export default CategoryPage;
