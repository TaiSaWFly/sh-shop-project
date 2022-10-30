import React, { useEffect, useState } from "react";
import { products } from "../../../data/products";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import Loading from "../../common/loadingComponent/loading";
import CategoryHeader from "../../ui/categoryComponents/categoryHeader/categoryHeader";
import ProductFilter from "../../ui/categoryComponents/productFilter/productFilter";
import ProductItems from "../../ui/categoryComponents/productItems/productItems";

const AllProductsPage = ({ state }) => {
  const { categoryId, typeId, name } = state;
  const [allProducts, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const getAllProducts = products.filter((p) => p.category === categoryId);
      const getAllTypesProducts = getAllProducts.filter(
        (p) => p.type === typeId
      );
      setProducts(getAllTypesProducts);
    }, 900);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, [categoryId, typeId]);

  return (
    <ComponentContainer>
      <h2>
        AllProductsPage {categoryId} {name}
      </h2>
      <CategoryHeader typeId={typeId} name={name} />
      {!isLoading ? (
        <>
          <ProductFilter />
          <ProductItems productsItems={allProducts} />
        </>
      ) : (
        <Loading />
      )}
    </ComponentContainer>
  );
};

export default AllProductsPage;
