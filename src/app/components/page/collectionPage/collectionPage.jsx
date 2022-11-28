import React, { useEffect, useState } from "react";
import CollectionHeader from "../../ui/collectionComponents/collectionHeader/collectionHeader";
import CollectionCategories from "../../ui/collectionComponents/collectionCategories/collectionCategories";
import ProductFilter from "../../ui/collectionComponents/productFilter/productFilter";
import Loading from "../../common/loadingComponent/loading";
import { useParams } from "react-router-dom";
import api from "../../../api";

const CollectionPage = () => {
  const { collection: collectionPath } = useParams();
  const [collection, setCollection] = useState(null);
  const [dataCollection, setDataCollection] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isColLoad, setIsColLoad] = useState(true);
  const [isDataLoad, setIsDataLoad] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [collectionPath]);

  useEffect(() => {
    setIsColLoad(true);
    setIsDataLoad(true);

    setCollection(null);
    setDataCollection(null);

    api.collectionCategories
      .getCollectionCategoryWithProductsByCollectionPath(collectionPath)
      .then((data) => setCollection(data));

    api.collections
      .getCollectionByPath(collectionPath)
      .then((data) => setDataCollection(data));
  }, [collectionPath]);

  useEffect(() => {
    if (collection !== null) {
      setIsColLoad(false);
    }
  }, [collection]);

  useEffect(() => {
    if (dataCollection !== null) {
      setIsDataLoad(false);
    }
  }, [dataCollection]);

  useEffect(() => {
    if (!isColLoad && !isDataLoad) {
      setLoading(false);
    }
  }, [isColLoad, isDataLoad]);

  return (
    <>
      <h2>CategoryPage {collectionPath}</h2>

      {!isLoading ? (
        <>
          <CollectionHeader
            {...{ name: dataCollection.name, path: collectionPath }}
          />
          <ProductFilter />
          <CollectionCategories {...{ collectionPath, collection }} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CollectionPage;
