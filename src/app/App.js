import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/ui/footer/footerComponent/footer";
import Header from "./components/ui/header/headerComponent/header";
import CategoryLayout from "./layouts/categoryLayout";
import AboutPage from "./components/page/aboutPage/aboutPage";
import BasketPage from "./components/page/basketPage/basketPage";
import MainPage from "./components/page/mainPage/mainPage";
import PageLayout from "./layouts/pageLayout";
import ProductCard from "./components/ui/productCard/productCard";
import LoginLayout from "./layouts/loginLayout";
import NewArrivalsPage from "./components/page/newArrivalsPage/newArrivalsPage";

function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" component={LoginLayout} />
          <Route path="/register" component={LoginLayout} />
          <Route
            path="/category/:category?/:products?"
            component={CategoryLayout}
          />
          <Route path="/product/:productId?" component={ProductCard} />
          <Route path="/basket" component={BasketPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/newArrivals" component={NewArrivalsPage} />

          <Redirect to="/" />
        </Switch>
      </PageLayout>
      <Footer />
    </>
  );
}

export default App;
