import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ComponentContainer from "../common/componentContainer/componentContainer";
import AllProductsPage from "../page/allProductsPage/allProductsPage";
import CollectionPage from "../page/collectionPage/collectionPage";

const CollectionLayout = () => {
  // const { collection } = useParams();
  const { state } = useLocation();
  // console.log(state);

  return (
    <ComponentContainer>
      <Switch>
        {state ? (
          <>
            <Route
              exact
              path="/collection/:collection?"
              component={CollectionPage}
            />

            <Route
              path="/collection/:collection?/:category?/products"
              component={AllProductsPage}
            />
          </>
        ) : (
          <Redirect to="/" from="*" />
        )}
      </Switch>
    </ComponentContainer>
  );
};

export default CollectionLayout;
