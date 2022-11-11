import React, { useState, useEffect } from "react";
import { products } from "../../../data/basicData/products";
import TitleComponent from "../../common/titleComponent/titleComponent";
import NewProducts from "../../ui/newProducts/newProducts";
import methodFilterProducts from "../../../utils/methodFilterProducts";
import Loading from "../../common/loadingComponent/loading";

const NewArrivalsPage = () => {
  const [dataProducts, setData] = useState();

  useEffect(() => {
    const data = methodFilterProducts.newArrivals(products);
    setData(data);
  }, []);

  return (
    <>
      <TitleComponent
        title="New Arrivals"
        subtitle="Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo."
      />
      {dataProducts ? <NewProducts dataProducts={dataProducts} /> : <Loading />}
    </>
  );
};

export default NewArrivalsPage;
