import React from "react";
import { Link } from "react-router-dom";
import style from "./collectionHeader.module.scss";

const CollectionHeader = ({
  url = "",
  collectionId,
  categoryId,
  name,
  loading,
}) => {
  return (
    <div className={style.collection_header}>
      <div className={style.collection_header_wrapper}>
        <div
          className={
            categoryId
              ? style.collection_header_title__capitalize
              : style.collection_header_title__uppercase
          }>
          {name}
        </div>
        <>
          {!loading && (
            <>
              {url !== "" ? (
                <Link
                  to={{
                    pathname: `/collection/${url}/products`,
                    state: { collectionId: collectionId, name: name },
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

export default CollectionHeader;
