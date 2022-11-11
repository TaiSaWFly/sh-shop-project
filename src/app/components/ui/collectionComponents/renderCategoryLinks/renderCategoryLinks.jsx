import React from "react";
import { Link } from "react-router-dom";
import { collectionCategories } from "../../../../data/basicData/collectionCategories";
import { products } from "../../../../data/basicData/products";
import { category } from "../../../../data/basicData/category";
import { checkingCategoriesOnEmptyProducts } from "../../../../utils/checkingCategoriesOnEmptyProducts";
import { getDataByIds } from "../../../../utils/getDataByIds";
import { definedLengthArray } from "../../../../utils/definedLengthArray";

const RenderCategoryLinks = ({ collectionId, url }) => {
  const categoriesIds = checkingCategoriesOnEmptyProducts(
    collectionId,
    products,
    collectionCategories
  );
  const findCategories = getDataByIds(categoriesIds, category);
  const definedCategories = definedLengthArray(findCategories, 3);

  const renderCategoryLink = (url, name, collectionId, categoryId) => {
    return (
      <Link
        to={{
          pathname: `/collection/${url + "/" + name}/products`,
          state: {
            collectionId: collectionId,
            categoryId: categoryId,
            name: name,
          },
        }}>
        {name}
      </Link>
    );
  };

  return (
    <>
      {definedCategories.map((d, i, arr) =>
        i === arr.length - 1 ? (
          <span key={d.id}>
            {" and"} {renderCategoryLink(url, d.name, collectionId, d.id)}
          </span>
        ) : i === arr.length - 2 ? (
          <span key={d.id}>
            {renderCategoryLink(url, d.name, collectionId, d.id)}
          </span>
        ) : (
          <span key={d.id}>
            {renderCategoryLink(url, d.name, collectionId, d.id)}
            {", "}
          </span>
        )
      )}
    </>
  );
};

export default RenderCategoryLinks;
