import React from "react";
import style from "./noProductsCaregory.module.scss";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import RenderCategoryLinks from "../renderCategoryLinks/renderCategoryLinks";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../../../api";
import Loading from "../../../common/loadingComponent/loading";

const NoProductsCaregory = ({ name, categoryId, collectionPath }) => {
  const [collectionCategories, setCollectionCategories] = useState();
  const [collectionId, setCollectionId] = useState();
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    api.collectionCategories
      .fetchAll()
      .then((data) => setCollectionCategories(data));

    api.collections
      .getCollectionIdByPath(collectionPath)
      .then((data) => setCollectionId(data));

    api.categories.fetchAll().then((data) => setCategories(data));
  }, [collectionPath]);

  useEffect(() => {
    if (collectionCategories) {
      setIsLoading(false);
    }
  }, [collectionCategories]);

  useEffect(() => {
    if (collectionId) {
      setIsLoading(false);
    }
  }, [collectionId]);

  useEffect(() => {
    if (categories) {
      setIsLoading(false);
    }
  }, [categories]);

  return (
    <>
      {!isLoading ? (
        <div className={style.no_products_caregory}>
          <div className={style.title}>
            <TitleComponent
              title={name}
              subtitle="No products in this category"
            />
          </div>

          <div className={style.content}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              ex quis neque deleniti pariatur sequi sunt fuga blanditiis,
              temporibus iste ea. Ex totam eum corporis in officiis quos sint
              vel.
            </p>
            <div>
              Please try to find something in this category{" "}
              {
                <RenderCategoryLinks
                  {...{
                    collectionCategories,
                    collectionPath,
                    collectionId,
                    currentCategoryId: categoryId,
                    categories,
                  }}
                />
              }
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default NoProductsCaregory;
