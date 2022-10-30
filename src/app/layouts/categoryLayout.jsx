import React from "react";
import { useLocation, useParams } from "react-router-dom";
import AllProductsPage from "../components/page/allProductsPage/allProductsPage";
import CategoryPage from "../components/page/categoryPage/categoryPage";

const CategoryLayout = () => {
  const { category, products } = useParams();
  const { state } = useLocation();

  return (
    <>
      {category && products ? (
        <AllProductsPage product={products} state={state} />
      ) : (
        <CategoryPage url={category} state={state} />
      )}
    </>
  );
};

export default CategoryLayout;
