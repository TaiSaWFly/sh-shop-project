import React from "react";
import ProductDescriptionShort from "../../../common/productDescriptionShort/productDescriptionShort";
import style from "./dropdownDescription.module.scss";
import { CSSTransition } from "react-transition-group";

const DropdownDescription = ({ product, dropdown }) => {
  return (
    <CSSTransition
      in={dropdown}
      appear
      timeout={{
        enter: 100,
        exit: 400,
      }}
      classNames={{
        appear: style.dropdown,
        enter: style.show,
        enterDone: style.show__appearance,
        exit: style.hide__disappearance,
        exitDone: style.hide,
      }}
      mountOnEnter
      unmountOnExit>
      <div>
        <ProductDescriptionShort
          {...{
            id: product.id,
            name: product.name,
            price: product.price,
            newPrice: product.newPrice,
            description: product.description,
          }}
        />
      </div>
    </CSSTransition>
  );
};

export default DropdownDescription;
