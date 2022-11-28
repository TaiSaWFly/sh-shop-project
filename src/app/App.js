import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/ui/footer/footerComponent/footer";
import Header from "./components/ui/header/headerComponent/header";
import CollectionLayout from "./components/layouts/collectionLayout";
import AboutPage from "./components/page/aboutPage/aboutPage";
import BasketPage from "./components/page/basketPage/basketPage";
import MainPage from "./components/page/mainPage/mainPage";
import PageLayout from ".//components/layouts/pageLayout";
import AuthLayout from "./components/layouts/authLayout/authLayout";
import AccountLayout from "./components/layouts/accountLayout/accountLayout";
import ContactPage from "./components/page/contactPage/contactPage";
import ProductCardLayout from "./components/layouts/productCardLayout/productCardLayout";
import AuthProvider from "./components/hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoutes/protectedRoute";
import NewArrivalsPage from "./components/page/newProductsPages/newArrivalsPage";

function App() {
  return (
    <AuthProvider>
      <Header />
      <PageLayout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/auth" component={AuthLayout} />
          <ProtectedRoute
            path="/account"
            component={AccountLayout}
            redirect="/auth"
          />
          <Route path="/collection" component={CollectionLayout} />
          <Route path="/product/:productId?" component={ProductCardLayout} />
          <Route path="/basket" component={BasketPage} />
          <Route path="/newarrivals" component={NewArrivalsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />

          <Redirect to="/" from="*" />
        </Switch>
      </PageLayout>
      <Footer />
    </AuthProvider>
  );
}

export default App;
