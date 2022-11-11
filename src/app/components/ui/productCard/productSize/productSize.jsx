import React, { useEffect, useState } from "react";
import style from "./productSize.module.scss";
import { size } from "../../../../data/basicData/size";
import { getDataByIds } from "../../../../utils/getDataByIds";
import Loading from "../../../common/loadingComponent/loading";
import _ from "lodash";

const ProductSize = ({ sizes }) => {
  const [sizesArray, setSize] = useState();

  useEffect(() => {
    const initSizes = getDataByIds(sizes, size);
    setSize(initSizes);
  }, [sizes]);

  const sortSize = _.orderBy(sizesArray, ["value"], ["asc"]);

  return (
    <div className={style.product_size}>
      {sortSize ? (
        <ul className={style.product_size__list}>
          <div className={style.product_size__title}>size</div>
          {sortSize.map((s) => (
            <li key={s.id} className={style.product_size___list_item}>
              <span>{s.value}</span>
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductSize;
