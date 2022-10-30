import React from "react";
import { Link } from "react-router-dom";
import style from "./categoryHeader.module.scss";

const CategoryHeader = ({ url = "", categoryId, typeId, name, loading }) => {
  return (
    <div className={style.category_header}>
      <div className={style.category_header_wrapper}>
        <div
          className={
            typeId
              ? style.category_header_title__capitalize
              : style.category_header_title__uppercase
          }>
          {name}
        </div>
        <>
          {!loading && (
            <>
              {url !== "" ? (
                <Link
                  to={{
                    pathname: `/category/${url}/products`,
                    state: { categoryId: categoryId, name: name },
                  }}>
                  show all
                </Link>
              ) : null}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default CategoryHeader;
