import React from "react";
import { Link } from "react-router-dom";
import { returnCaterogiesWithoutCurrentCategoryId } from "../../../../utils/returnCaterogiesWithoutCurrentCategoryId";
import { definedLengthArray } from "../../../../utils/definedLengthArray";

const RenderCategoryLinks = ({
  collectionCategories,
  collectionPath,
  collectionId,
  currentCategoryId,
  categories,
}) => {
  const categoriesIds = returnCaterogiesWithoutCurrentCategoryId(
    collectionCategories,
    collectionId,
    currentCategoryId,
    categories
  );
  const definedCategories = definedLengthArray(categoriesIds, 3);

  const renderCategoryLink = (collectionPath, name, categoryPath) => {
    return (
      <Link
        to={{
          pathname: `/collection/${
            collectionPath + "/" + categoryPath
          }/products`,
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
            {" and"} {renderCategoryLink(collectionPath, d.name, d.path)}
          </span>
        ) : i === arr.length - 2 ? (
          <span key={d.id}>
            {renderCategoryLink(collectionPath, d.name, d.path)}
          </span>
        ) : (
          <span key={d.id}>
            {renderCategoryLink(collectionPath, d.name, d.path)}
            {", "}
          </span>
        )
      )}
    </>
  );
};

export default RenderCategoryLinks;
