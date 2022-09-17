import React from "react";
import { useParams } from "react-router-dom";
import CategoryPage from "../components/categoryComponent/categoryPage/categoryPage";

const CategoryPageLayout = () => {
  const { categoryUrl, productAll } = useParams();

  return (
    <>
      {categoryUrl && productAll ? (
        <CategoryPage categoryUrl={categoryUrl} productAll={productAll} />
      ) : (
        <CategoryPage categoryUrl={categoryUrl} />
      )}
    </>
  );
};

export default CategoryPageLayout;
