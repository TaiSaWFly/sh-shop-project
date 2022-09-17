import React from "react";
import style from "./categotySelect.module.scss";

const CategotySelect = () => {
  return (
    <div className={style.select_wrapper}>
      <div className={style.select}>
        <label htmlFor="price"></label>
        <select name="price" id="price" defaultValue="default">
          <option value="default" disabled>
            Price
          </option>
          <option value="2">&pound;20-30</option>
          <option value="2">&pound;20-30</option>
          <option value="2">&pound;20-30</option>
          <option value="2">&pound;20-30</option>
        </select>
      </div>
      <div className={style.select}>
        <label htmlFor="size"></label>
        <select name="size" id="size" defaultValue="default">
          <option value="default" disabled>
            Size
          </option>
          <option value="1">38</option>
          <option value="2">39</option>
          <option value="3">40</option>
          <option value="4">41</option>
          <option value="5">42</option>
        </select>
      </div>
      <div className={style.select}>
        <label htmlFor="color"></label>
        <select name="color" id="color" defaultValue="default">
          <option value="default" disabled>
            Color
          </option>
          <option value="1">red</option>
          <option value="2">blue</option>
          <option value="3">gren</option>
        </select>
      </div>
    </div>
  );
};

export default CategotySelect;
