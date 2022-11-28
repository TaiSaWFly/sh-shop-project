import React, { useEffect, useState } from "react";
import style from "./productSize.module.scss";
import Loading from "../../../common/loadingComponent/loading";
import _ from "lodash";
import api from "../../../../api";

const ProductSize = ({ sizes, onChange }) => {
  const [sizesArray, setSizes] = useState();
  const [currentSize, setCurrentSize] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sizes) {
      api.sizes.getSizesByIds(sizes).then((data) => setSizes(data));
    }
  }, [sizes]);

  useEffect(() => {
    if (sizesArray) {
      setIsLoading(false);
    }
  }, [sizesArray]);

  const sortSize = _.orderBy(sizesArray, ["value"], ["asc"]);

  const handleChange = (id) => {
    setCurrentSize(id);
    onChange({ size: id });
  };

  const setActiveClass = (id) => {
    return id === currentSize
      ? style.product_size___list_item__active
      : style.product_size___list_item;
  };

  return (
    <>
      {sizes && (
        <>
          {!isLoading ? (
            <div className={style.product_size}>
              {sortSize && sortSize.length !== 0 && (
                <ul className={style.product_size__list}>
                  <div className={style.product_size__title}>size</div>
                  {sortSize.map((s) => (
                    <li
                      key={s.id}
                      onClick={() => handleChange(s.id)}
                      className={setActiveClass(s.id)}>
                      <span>{s.value}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
};

export default ProductSize;
