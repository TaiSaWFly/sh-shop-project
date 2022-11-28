import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
import api from "../../../api";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import Loading from "../../common/loadingComponent/loading";
import ProductCardPage from "../../page/productCardPages/productCardPage/productCardPage";
import ProductDescriptionPage from "../../page/productCardPages/productDescriptionPage/productDescriptionPage";
import ReviewsPage from "../../page/productCardPages/reviewsPage/reviewsPage";
import style from "./productCardLayout.module.scss";

const ProductCardLayout = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    api.products.getProductById(productId).then((data) => setProduct(data));
  }, [productId]);

  return (
    <ComponentContainer>
      {product ? (
        <>
          <div className={style.product_card_page}>
            <ProductCardPage {...{ product, productId }} />
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
        </>
      ) : (
        <Loading />
      )}
    </ComponentContainer>
  );
};

export default ProductCardLayout;
