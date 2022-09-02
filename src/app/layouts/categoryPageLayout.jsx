import React from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../components/categoryComponent/categoryPage/categoryPage";
import ProductCard from "../components/productCardComponnet/productCard";

const CategoryPageLayout = () => {
  const { categoryUrl, productId } = useParams();
  return (
    <>
      {categoryUrl && productId ? (
        <ProductCard productId={productId} />
      ) : categoryUrl ? (
        <CategoryPage categoryUrl={categoryUrl} />
      ) : (
        <CategoryPage categoryUrl={categoryUrl} />
      )}
    </>
  );
};

export default CategoryPageLayout;
