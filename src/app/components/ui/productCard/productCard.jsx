import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./productCard.module.scss";
import { products } from "../../../data/products";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import RenderPrice from "../../common/priceComponent/renderPrice";
import Button from "../../common/buttonComponent/button";

const ProductCard = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const initProduct = products.filter((p) => p.id === productId);
    setProduct(initProduct);
  }, [productId]);

  return (
    <ComponentContainer>
      <h2>ProductCard {productId}</h2>
      <div>
        {product
          ? product.map((item, index) => (
              <div key={index} className={style.product_card}>
                <div className={style.product_card__item}>
                  <div className={style.product_card__item_img}>
                    <img alt="pic" src={require(`/src/${item.imgUrl}`)} />
                    <div className={style.product_card__item_other_img}>
                      {item.otherImg.map((img, index) => (
                        <div
                          key={index}
                          className={
                            style.product_card__item__wrapper_other_img
                          }>
                          <img alt="pic" src={require(`/src/${img.imgUrl}`)} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={style.product_card__item}>
                  <div>
                    <div className={style.product_card__item_clothing_title}>
                      {item.name}
                    </div>
                    <div className={style.product_card__item_article_number}>
                      Article number: {item.articleNumber}
                    </div>
                    <div className={style.product_card__item_price}>
                      {item.newPrice ? (
                        <>
                          <span className={style.price_old}>
                            <RenderPrice price={item.price} />
                          </span>
                          <RenderPrice price={item.newPrice} />
                        </>
                      ) : (
                        <RenderPrice price={item.price} />
                      )}
                    </div>
                    <div>reviews: {item.reviews} (!length!)</div>
                    <div className={style.product_card__item_description}>
                      <div
                        className={style.product_card__item_description_title}>
                        Description
                      </div>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <ul className={style.product_card__item_list_size}>
                        <div
                          className={style.product_card__item_list_size_title}>
                          size
                        </div>
                        {item.size.map((size, index) => (
                          <li
                            key={index}
                            className={style.product_card__item_list_size_item}>
                            <span>{size}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className={"button"}>add do card</Button>
                  </div>
                </div>
              </div>
            ))
          : "load"}
      </div>
    </ComponentContainer>
  );
};

export default ProductCard;
