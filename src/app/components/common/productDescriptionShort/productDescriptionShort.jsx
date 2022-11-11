import React from "react";
import { formatTextByQuantitySentences } from "../../../utils/formatTextByQuantitySentences";
import PopularListActions from "../../ui/main/popularListActions/popularListActions";
import RenderPrice from "../priceComponent/renderPrice";
import style from "./productDescriptionShort.module.scss";

const ProductDescriptionShort = ({
  id,
  name,
  price,
  newPrice,
  description,
  titleSize,
  textSize,
  QTYSentences,
}) => {
  const fontSizeTitle = {
    fontSize: `${titleSize}`,
  };
  const fontSizeText = {
    fontSize: `${textSize}`,
  };

  return (
    <div className={style.description}>
      <div
        style={titleSize ? fontSizeTitle : null}
        className={style.description_title}>
        {name}{" "}
        {newPrice ? (
          <div>
            <span className={style.product_price__old}>
              <RenderPrice price={price} />
            </span>
            <RenderPrice price={newPrice} />
          </div>
        ) : (
          <RenderPrice price={price} />
        )}
      </div>

      <div
        style={textSize ? fontSizeText : null}
        className={style.product_description}>
        {QTYSentences
          ? formatTextByQuantitySentences(description, QTYSentences)
          : formatTextByQuantitySentences(description, 3)}
      </div>

      <div className={style.product_description__actions}>
        <PopularListActions productId={id} />
      </div>
    </div>
  );
};

export default ProductDescriptionShort;
