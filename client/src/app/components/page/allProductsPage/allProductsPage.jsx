import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import Loading from "../../common/loadingComponent/loading";
import CollectionHeader from "../../ui/collectionComponents/collectionHeader/collectionHeader";
import NoProductsCaregory from "../../ui/collectionComponents/noProductsCaregory/noProductsCaregory";
import ProductFilter from "../../ui/collectionComponents/productFilter/productFilter";
import ProductItems from "../../ui/collectionComponents/productItems/productItems";

const AllProductsPage = () => {
  const { collection: collectionPath, category: categoryPath } = useParams();

  const [allProducts, setProducts] = useState();
  const [collCategory, setCollCategory] = useState();
  const [isLoading, setLoading] = useState(true);
  const [dataPage, setDataPage] = useState();

  console.log(collectionPath, categoryPath);

  useEffect(() => {
    setLoading(true);

    if (!categoryPath) {
      api.collections
        .getCollectionProductsByPath(collectionPath)
        .then((data) => setProducts(data));

      api.collections
        .getCollectionByPath(collectionPath)
        .then((data) => setDataPage(data));

      api.collectionCategories
        .getCollCategoryByCollectionPath(collectionPath)
        .then((data) => setCollCategory(data));
    }

    if (categoryPath) {
      api.products
        .getProductsByCollectionPathAndCategoryPath(
          collectionPath,
          categoryPath
        )
        .then((data) => setProducts(data));

      api.categories
        .getCategoryByPath(categoryPath)
        .then((data) => setDataPage(data));

      api.collectionCategories
        .getCollCategoryByCollectionPath(collectionPath)
        .then((data) => setCollCategory(data));
    }
  }, [collectionPath, categoryPath]);

  useEffect(() => {
    if (allProducts) {
      setLoading(false);
    }
  }, [allProducts]);

  // useEffect(() => {
  //   if (collCategory) {

  //   }
  // }, [collCategory]);

  // useEffect(() => {
  //   if (dataPage) {
  //     // console.log(dataPage);
  //   }
  // }, [dataPage]);

  return (
    <>
      <h2>
        AllProductsPage {collectionPath} {categoryPath}
      </h2>
      {!isLoading ? (
        <>
          {allProducts.length !== 0 ? (
            <>
              {collCategory ? (
                <>
                  <CollectionHeader {...{ name: dataPage.name }} />
                  <ProductFilter />
                  <ProductItems productsItems={allProducts} />
                </>
              ) : (
                <>
                  <CollectionHeader {...{ name: dataPage.name }} />
                  <ProductItems productsItems={allProducts} />
                </>
              )}
            </>
          ) : (
            <NoProductsCaregory
              {...{
                name: dataPage.name,
                categoryId: dataPage.id,
                collectionPath,
              }}
            />
          )}
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default AllProductsPage;
