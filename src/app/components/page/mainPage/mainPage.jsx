import React from "react";
import ComponentContainer from "../../common/componentContainer/componentContainer";
import MainTitle from "../../ui/main/mainTitle/homeTitle";
import ShopsNewsLetter from "../../ui/main/shopsNewsletter/shopsNewsletter";
import PopularProducts from "../../ui/main/popularProducts/popularProducts";

const MainPage = () => {
  return (
    <ComponentContainer>
      <MainTitle />
      <PopularProducts />
      <ShopsNewsLetter />
    </ComponentContainer>
  );
};

export default MainPage;
