import React, { useState } from "react";
import { useEffect } from "react";
import { products } from "../../../data/products";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import TitleComponent from "../../common/titleComponent/titleComponent";
import NewArrivals from "../../ui/newArrivals/newArrivals";
import methodFilterProducts from "../../../utils/methodFilterProducts";

const NewArrivalsPage = () => {
  const [dataProducts, setData] = useState();
  useEffect(() => {
    const data = methodFilterProducts.newArrivals(products);
    setData(data);
  }, []);

  return (
    <ComponentContainer>
      <TitleComponent
        title="New Arrivals"
        subtitle="Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo."
      />
      {dataProducts ? <NewArrivals dataProducts={dataProducts} /> : "Load"}
    </ComponentContainer>
  );
};

export default NewArrivalsPage;
