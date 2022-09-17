import React from "react";
import style from "./productCard.module.scss";
import { clothingData } from "../../constants/clothingData";
import ComponentContainer from "../common/componentContainer/componentContainer";
import { useParams } from "react-router-dom";

const ProductCard = () => {
  const { productId } = useParams();

  return (
    <ComponentContainer>
      <h2>ProductCard {productId}</h2>
      <div>
        {clothingData.map((item, index) => (
          <div key={index} className={style.product_card}>
            <div className={style.product_card__item}>
              <div className={style.product_card__item_img}>
                <img alt="pic" src={require(`/src/${item.imgUrl}`)} />
                <div className={style.product_card__item_other_img}>
                  {item.otherImg.map((img, index) => (
                    <div
                      key={index}
                      className={style.product_card__item__wrapper_other_img}>
                      <img alt="pic" src={require(`/src/${img.imgUrl}`)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={style.product_card__item}>
              <div>
                <div className={style.product_card__item_clothing_title}>
                  {item.clothingName}
                </div>
                <div className={style.product_card__item_article_number}>
                  Article number: {item.articleNumber}
                </div>
                <div className={style.product_card__item_price}>
                  {item.newPrice ? (
                    <>
                      <span className={style.price_old}>
                        &pound;{item.price}
                      </span>
                      <span>&pound;{item.newPrice}</span>
                    </>
                  ) : (
                    <span>&pound;{item.price}</span>
                  )}
                </div>
                <div>reviews: {item.reviews} (!length!)</div>
                <div className={style.product_card__item_description}>
                  <div className={style.product_card__item_description_title}>
                    Description
                  </div>
                  <p>{item.description}</p>
                </div>
                <div>
                  <ul className={style.product_card__item_list_size}>
                    <div className={style.product_card__item_list_size_title}>
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
                <button className="button">add do card</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ComponentContainer>
  );
};

export default ProductCard;
