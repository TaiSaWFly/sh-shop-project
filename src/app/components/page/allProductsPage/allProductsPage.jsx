import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { products } from "../../../data/basicData/products";
import Loading from "../../common/loadingComponent/loading";
import CollectionHeader from "../../ui/collectionComponents/collectionHeader/collectionHeader";
import NoProductsCaregory from "../../ui/collectionComponents/noProductsCaregory/noProductsCaregory";
import ProductFilter from "../../ui/collectionComponents/productFilter/productFilter";
import ProductItems from "../../ui/collectionComponents/productItems/productItems";

const AllProductsPage = () => {
  const { state } = useLocation();
  const { collection: collectionUrl, category: categoryUrl } = useParams();

  const { collectionId, categoryId, name } = state;
  const [allProducts, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (categoryId) {
        const getAllProducts = products.filter(
          (p) => p.collection === collectionId
        );
        const getAllCateroriesProducts = getAllProducts.filter(
          (p) => p.category === categoryId
        );
        setProducts(getAllCateroriesProducts);
      }

      if (!categoryId) {
        const getAllProducts = products.filter(
          (p) => p.collection === collectionId
        );
        setProducts(getAllProducts);
      }
    }, 900);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, [collectionId, categoryId]);

  return (
    <>
      <h2>
        AllProductsPage {collectionUrl} {categoryUrl}
      </h2>
      {!isLoading ? (
        <>
          {allProducts.length !== 0 ? (
            <>
              <CollectionHeader {...{ categoryId, name }} />
              <ProductFilter />
              <ProductItems productsItems={allProducts} />
            </>
          ) : (
            <NoProductsCaregory
              {...{ name, collectionId, url: collectionUrl }}
            />
          )}
        </>
      ) : (
        <>
          <CollectionHeader {...{ categoryId, name }} />
          <Loading />
        </>
      )}
    </>
  );
};

export default AllProductsPage;
