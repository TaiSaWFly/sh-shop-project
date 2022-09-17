import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/footerComponent/footer/footer";
import Header from "./components/headerComponnent/header/header";
import CategoryPageLayout from "./layouts/categoryPageLayout";
import AboutPageLayout from "./layouts/aboutPageLayout";
import HomePageLayout from "./layouts/homePageLayout";
import PageLayout from "./layouts/pageLayout";
import BasketPageLayout from "./layouts/basketPageLayout";
import ProductCard from "./components/productCardComponnet/productCard";
import LoginPageLayout from "./layouts/loginPageLayout";

function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <Switch>
          <Route path="/" exact component={HomePageLayout} />
          <Route
            path="/category/:categoryUrl?/:productAll?"
            component={CategoryPageLayout}
          />
          <Route path="/product/:productId?" component={ProductCard} />
          <Route path="/about" component={AboutPageLayout} />
          <Route path="/basket" component={BasketPageLayout} />
          <Route path="/login" component={LoginPageLayout} />
          <Redirect to="/" />
        </Switch>
      </PageLayout>
      <Footer />
    </>
  );
}

export default App;
