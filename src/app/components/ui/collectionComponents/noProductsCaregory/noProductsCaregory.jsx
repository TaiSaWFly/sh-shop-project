import React from "react";
import style from "./noProductsCaregory.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import RenderCategoryLinks from "../renderCategoryLinks/renderCategoryLinks";

const NoProductsCaregory = ({ name, collectionId, url }) => {
  return (
    <div className={style.no_products_caregory}>
      <div className={style.title}>
        <TitleComponent title={name} subtitle="No products in this category" />
      </div>

      <div className={style.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ex
          quis neque deleniti pariatur sequi sunt fuga blanditiis, temporibus
          iste ea. Ex totam eum corporis in officiis quos sint vel.
        </p>
        <div>
          Please try to find something in this category{" "}
          {<RenderCategoryLinks {...{ collectionId, url }} />}
        </div>
      </div>
    </div>
  );
};

export default NoProductsCaregory;
