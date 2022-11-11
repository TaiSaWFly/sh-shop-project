import React, { useEffect, useState } from "react";
import style from "./accountFavourite.module.scss";
import ProductDescriptionShort from "../../../common/productDescriptionShort/productDescriptionShort";
import { useHistory } from "react-router-dom";
import { getDataByIds } from "../../../../utils/getDataByIds";
import { products } from "../../../../data/basicData/products";
import Loading from "../../../common/loadingComponent/loading";
import BackButton from "../../../common/buttonComponent/backButton";

const AccountFavourite = () => {
  const [favouriteProducts, setProducts] = useState();

  const user = {
    id: 1,
    name: "test1",
    email: "test@test.com",
    avatar: "",
    comments: "10",
    address: "current delivery address",
    favourite: ["product_1", "product_2", "product_3"],
  };

  useEffect(() => {
    const getProducts = getDataByIds(user.favourite, products);
    setTimeout(() => {
      setProducts(getProducts);
    }, 1000);
  }, [user.favourite]);

  const history = useHistory();
  const handleRedirectToProduct = (id) => {
    history.push(`/product/${id}`);
  };

  return (
    <div className={style.favourite_products}>
      <BackButton className={style.favourite__back_button} urlBack="/account">
        go back
      </BackButton>

      {favouriteProducts ? (
        favouriteProducts.map((p) => (
          <div key={p.id} className={style.product_item}>
            <div className={style.product_wrapper}>
              <div
                onClick={() => handleRedirectToProduct(p.id)}
                className={style.product_img}>
                <img alt="pic" src={require(`/src/${p.imgUrl}`)} />
              </div>

              <ProductDescriptionShort
                {...{
                  id: p.id,
                  name: p.name,
                  price: p.price,
                  newPrice: p.newPrice,
                  description: p.description,
                  titleSize: "1.2rem",
                  textSize: "1.15rem",
                  QTYSentences: 2,
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AccountFavourite;
