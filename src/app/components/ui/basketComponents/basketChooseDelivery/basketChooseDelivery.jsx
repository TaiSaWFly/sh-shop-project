import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { transformDataForSelect } from "../../../../utils/transformDataForSelect";
import SelectField from "../../../common/fieldCommonents/selectField/selectField";
import TitleComponent from "../../../common/titleComponent/titleComponent";
import CourierForm from "../../forms/deliveryForms/courierForm/courierForm";
import CourierTransportCompanyForm from "../../forms/deliveryForms/courierTransportCompanyForm/courierTransportCompanyForm";
import PickupPoint from "../../forms/deliveryForms/pickupPoint/pickupPoint";
import style from "./basketChooseDelivery.module.scss";

const RenderActiveForm = ({
  component: Component,
  optionId,
  currentOption,
}) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    if (currentOption) {
      setActive(optionId === currentOption.value ? true : false);
    }
  }, [optionId, currentOption]);

  return <>{isActive ? <Component /> : null}</>;
};

const BasketChooseDelivery = () => {
  const optionDeliveryMethods = [
    {
      id: "1",
      name: "courier",
      component: () => <CourierForm />,
    },
    {
      id: "2",
      name: "pickup point",
      component: () => <PickupPoint />,
    },
    {
      id: "3",
      name: "courier transport company",
      component: () => <CourierTransportCompanyForm />,
    },
  ];

  const [method, setMethod] = useState();
  const optionsMethods = transformDataForSelect(optionDeliveryMethods);

  const handleChangeMethod = (target) => {
    setMethod(target.value);
  };

  // "courier"
  // address of the pick-up point
  // shipping address

  return (
    <div className={style.choose_delivery}>
      <div className={style.choose_delivery__title}>
        <TitleComponent
          title={method ? "shipping address" : "choose a delivery method"}
          subtitle={method ? "All fields are required" : ""}
        />
      </div>

      <div className={style.choose_delivery__conteiner}>
        <div className={style.choose_delivery__select}>
          <SelectField
            label="delivery method"
            name="method"
            options={optionsMethods}
            value={method || ""}
            placeholder="choose method"
            onChange={handleChangeMethod}
          />
        </div>

        {optionDeliveryMethods.map((o) => (
          <RenderActiveForm
            key={o.id}
            optionId={o.id}
            component={o.component}
            currentOption={method}
          />
        ))}
      </div>
    </div>
  );
};

export default BasketChooseDelivery;
