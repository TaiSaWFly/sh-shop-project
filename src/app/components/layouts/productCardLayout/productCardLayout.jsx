import React from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import ProductCardPage from "../../page/productCardPages/productCardPage/productCardPage";
import ProductDescriptionPage from "../../page/productCardPages/productDescriptionPage/productDescriptionPage";
import ReviewsPage from "../../page/productCardPages/reviewsPage/reviewsPage";
import style from "./productCardLayout.module.scss";

const ProductCardLayout = () => {
  const { productId } = useParams();

  return (
    <ComponentContainer>
      <div className={style.product_card_page}>
        <ProductCardPage {...{ productId }} />
      </div>

      <div className={style.product_card_page__pages_info}>
        <Switch>
          <Route
            path={`/product/${productId}/decription`}
            component={ProductDescriptionPage}
          />

          <Route
            path={`/product/${productId}/reviews`}
            component={() => ReviewsPage({ ...{ productId } })}
          />
          <Redirect to={`/product/${productId}/decription`} from="*" />
        </Switch>
      </div>
    </ComponentContainer>
  );
};

export default ProductCardLayout;
