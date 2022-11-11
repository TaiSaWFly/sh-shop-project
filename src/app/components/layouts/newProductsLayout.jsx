import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ComponentContainer from "../common/componentContainer/componentContainer";
import CommingSoonPage from "../page/newProductsPages/commingSoonPage";
import NewArrivalsPage from "../page/newProductsPages/newArrivalsPage";

const NewProductsLayout = () => {
  return (
    <ComponentContainer>
      <Switch>
        <Route path="/newproducts/newarrivals" component={NewArrivalsPage} />
        <Route path="/newproducts/commingsoon" component={CommingSoonPage} />
        <Redirect to="/newproducts/newarrivals" from="*" />
      </Switch>
    </ComponentContainer>
  );
};

export default NewProductsLayout;
