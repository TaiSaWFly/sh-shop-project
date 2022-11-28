import React from "react";
import style from "./collectionCategories.module.scss";
import ProductItems from "../productItems/productItems";
import { definedLengthArray } from "../../../../utils/definedLengthArray";
import { Link } from "react-router-dom";

const CollectionCategories = ({ collectionPath: path, collection }) => {
  const checkEmptyProducts = collection.filter((c) => c.products.length > 0);
  const definedCollections = checkEmptyProducts.map((c) => ({
    ...c,
    products: definedLengthArray(c.products),
  }));

  return (
    <div className={style.collection_categories}>
      {definedCollections.map((c) => (
        <div key={c.id} className={style.collection_category__wrapper}>
          <div className={style.collection_category__info}>
            <div className={style.collection_category__info_title}>
              {c.name}
            </div>
            <div className={style.collection_category__info_show_more}>
              <Link
                to={{
                  pathname: `/collection/${path + "/" + c.path}/products`,
                }}>
                show more
              </Link>
            </div>
          </div>
          <ProductItems productsItems={c.products} />
        </div>
      ))}
    </div>
  );
};

export default CollectionCategories;
