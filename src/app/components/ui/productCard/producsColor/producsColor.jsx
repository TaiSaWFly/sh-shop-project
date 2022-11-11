import React, { useState, useEffect } from "react";
import style from "./producsColor.module.scss";
import { getDataByIds } from "../../../../utils/getDataByIds";
import { color } from "../../../../data/basicData/colors";
import Loading from "../../../common/loadingComponent/loading";

const ProducsColor = ({ colors }) => {
  const [colorsArr, setColors] = useState();

  useEffect(() => {
    if (colors) {
      const initColors = getDataByIds(colors, color);
      setColors(initColors);
    }
  }, [colors]);

  return (
    <>
      {colors && (
        <div className={style.product_color}>
          {colorsArr ? (
            <ul className={style.product_color__list}>
              <div className={style.product_color__title}>colors</div>
              {colorsArr.map((c) => (
                <li key={c.id} className={style.product_color___list_item}>
                  <div
                    style={{
                      backgroundColor: `${c.hex}`,
                    }}></div>
                </li>
              ))}
            </ul>
          ) : (
            <Loading />
          )}
        </div>
      )}
    </>
  );
};

export default ProducsColor;
