import React, { useState, useEffect } from "react";
import style from "./producsColor.module.scss";
import Loading from "../../../common/loadingComponent/loading";
import api from "../../../../api";

const ProducsColor = ({ colors, onChange }) => {
  const [colorsArr, setColors] = useState();
  const [currentColor, setCurrentColor] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (colors) {
      setIsLoading(true);
      api.colors.getColorsByIds(colors).then((data) => setColors(data));
    }
  }, [colors]);

  useEffect(() => {
    if (colorsArr) {
      setIsLoading(false);
    }
  }, [colorsArr]);

  const handleChange = (id) => {
    setCurrentColor(id);
    onChange({ color: id });
  };

  const setActiveClass = (id) => {
    return id === currentColor
      ? style.product_color___list_item__active
      : style.product_color___list_item;
  };

  return (
    <>
      {colors && (
        <>
          {!isLoading ? (
            <div className={style.product_color}>
              {colorsArr && colorsArr.length !== 0 && (
                <ul className={style.product_color__list}>
                  <div className={style.product_color__title}>colors</div>
                  {colorsArr.map((c) => (
                    <li
                      key={c.id}
                      onClick={() => handleChange(c.id)}
                      className={setActiveClass(c.id)}>
                      <div
                        style={{
                          backgroundColor: `${c.hex}`,
                        }}></div>
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

export default ProducsColor;
