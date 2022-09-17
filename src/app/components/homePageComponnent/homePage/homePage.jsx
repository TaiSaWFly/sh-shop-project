import React from "react";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import HomeTitle from "../homeTitle/homeTitle";
import ShopsNewsLetter from "../shopsNewsletter/shopsNewsletter";
import ShopTrends from "../shopTrends/shopTrends";

const HomePage = () => {
  return (
    <ComponentContainer>
      <HomeTitle />
      <ShopTrends />
      <ShopsNewsLetter />
    </ComponentContainer>
  );
};

export default HomePage;
