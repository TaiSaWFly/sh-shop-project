import React, { useState, useEffect } from "react";
import { commingSoonProducts } from "../../../data/basicData/commingSoonProducts";
import Loading from "../../common/loadingComponent/loading";
import TitleComponent from "../../common/titleComponent/titleComponent";
import NewProducts from "../../ui/newProducts/newProducts";

const CommingSoonPage = () => {
  const [dataProducts, setData] = useState();

  useEffect(() => {
    setData(commingSoonProducts);
  }, []);

  return (
    <>
      <TitleComponent
        title="Comming Soon"
        subtitle="Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo."
      />
      {dataProducts ? <NewProducts dataProducts={dataProducts} /> : <Loading />}
    </>
  );
};

export default CommingSoonPage;
