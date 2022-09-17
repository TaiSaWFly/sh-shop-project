import React from "react";
import NavBar from "../navBar/navBar";
import AboveHeader from "../aboveHeader/aboveHeader";
import ComponentContainer from "../../common/componentContainer/componentContainer";

const Header = () => {
  return (
    <>
      <AboveHeader />
      <header>
        <ComponentContainer name={"navBar"}>
          <NavBar />
        </ComponentContainer>
      </header>
    </>
  );
};

export default Header;
