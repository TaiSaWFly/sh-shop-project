import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { getCollectionCategoryLoadingStatus } from "../../store/slices/collectionCategory";
import ComponentContainer from "../common/componentContainer/componentContainer";
import Loading from "../common/loadingComponent/loading";
import AllProductsPage from "../page/allProductsPage/allProductsPage";
import CollectionPage from "../page/collectionPage/collectionPage";

const CollectionLayout = () => {
  const isLoadingCollectionCategory = useSelector(
    getCollectionCategoryLoadingStatus()
  );

  return (
    <ComponentContainer>
      {!isLoadingCollectionCategory ? (
        <Switch>
          <Route
            exact
            path="/collection/:collection?"
            component={CollectionPage}
          />

          <Route
            path="/collection/:collection?/:category?/products"
            component={AllProductsPage}
          />

          <Redirect to="/" from="*" />
        </Switch>
      ) : (
        <Loading />
      )}
    </ComponentContainer>
  );
};

export default CollectionLayout;
