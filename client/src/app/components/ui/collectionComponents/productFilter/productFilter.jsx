import React, { useState } from "react";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import style from "./productFilter.module.scss";

const ProductFilter = () => {
  const priceOptions = [
    { value: 1, label: "20-30" },
    { value: 2, label: "30-50", isDisabled: false },
    { value: 3, label: "50-100" },
    { value: 4, label: "100 and more" },
  ];
  const sizeOptions = [
    { value: "size_1", label: 38 },
    { value: "size_2", label: 39 },
    { value: "size_3", label: 40 },
    { value: "size_4", label: 41 },
    { value: "size_5", label: 42 },
  ];
  const colorOptions = [
    { value: 1, label: "Chocolate" },
    { value: 2, label: "Strawberry", isDisabled: false },
    { value: 3, label: "Vanilla" },
  ];
  const [data, setData] = useState({
    price: "",
    size: "",
    color: "",
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  return (
    <div className={style.product_filter}>
      <div className={style.filter_conteiner}>
        <div className={style.filter_wrapper}>
          <div className={style.filter}>
            <SelectField
              name="price"
              options={priceOptions}
              value={data.price}
              placeholder="Price"
              type="filter"
              onChange={handleChange}
            />
          </div>
          <div className={style.filter}>
            <SelectField
              name="size"
              options={sizeOptions}
              value={data.size}
              placeholder="Size"
              type="filter"
              onChange={handleChange}
            />
          </div>
          <div className={style.filter}>
            <SelectField
              name="color"
              options={colorOptions}
              value={data.color}
              placeholder="Color"
              type="filter"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
