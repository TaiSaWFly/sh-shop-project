import React, { useState, useEffect } from "react";
import TitleComponent from "../../common/titleComponent/titleComponent";
import Loading from "../../common/loadingComponent/loading";
import api from "../../../api";
import ProductItems from "../../ui/collectionComponents/productItems/productItems";
import ComponentContainer from "../../common/componentContainer/componentContainer";

const NewArrivalsPage = () => {
  const [products, setData] = useState();

  useEffect(() => {
    api.products.getProductsByNewArrivals().then((data) => setData(data));
  }, []);

  return (
    <ComponentContainer>
      <>
        <TitleComponent
          title="New Arrivals"
          subtitle="Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo."
        />
        {products ? <ProductItems productsItems={products} /> : <Loading />}
      </>
    </ComponentContainer>
  );
};

export default NewArrivalsPage;
