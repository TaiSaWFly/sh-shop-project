import React, { useEffect, useState } from "react";
import CollectionHeader from "../../ui/collectionComponents/collectionHeader/collectionHeader";
import { filterDataForCategories } from "../../../utils/filterDataForCategories";
import { products } from "../../../data/basicData/products";
import { category } from "../../../data/basicData/category";
import CollectionCategories from "../../ui/collectionComponents/collectionCategories/collectionCategories";
import ProductFilter from "../../ui/collectionComponents/productFilter/productFilter";
import Loading from "../../common/loadingComponent/loading";
import { useLocation, useParams } from "react-router-dom";

const CollectionPage = () => {
  const { collection: collectionUrl } = useParams();
  const { state } = useLocation();
  const { collectionId, name, categoriesIds } = state;

  const [collections, setCollection] = useState();
  const [isLoading, setLoading] = useState(true);

  // console.log(collectionId, name, categoriesIds);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const getCollections = filterDataForCategories(
        products,
        category,
        categoriesIds,
        collectionId
      );
      console.log(getCollections);
      setCollection(getCollections);
    }, 900);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [collectionId, categoriesIds]);

  return (
    <>
      <h2>CategoryPage {collectionUrl}</h2>
      <CollectionHeader
        url={collectionUrl}
        collectionId={collectionId}
        name={name}
        loading={isLoading}
      />

      {!isLoading ? (
        <>
          <ProductFilter />
          <CollectionCategories
            url={collectionUrl}
            id={collectionId}
            collections={collections}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CollectionPage;
