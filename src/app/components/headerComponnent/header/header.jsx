import React from "react";
import NavBar from "../navBar/navBar";
import AboveHeader from "../aboveHeader/aboveHeader";

const Header = () => {
  return (
    <>
      <AboveHeader />
      <header>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
