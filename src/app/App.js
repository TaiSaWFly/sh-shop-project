import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/footerComponent/footer/footer";
import Header from "./components/headerComponnent/header/header";
import CategoryPageLayout from "./layouts/categoryPageLayout";
import AboutPageLayout from "./layouts/aboutPageLayout";
import HomePageLayout from "./layouts/homePageLayout";
import SignInRegister from "./layouts/signInReister";
import PageLayout from "./layouts/pageLayout";

function App() {
  return (
    <>
      <Header />
      <PageLayout>
        <Switch>
          <Route path="/" exact component={HomePageLayout} />
          <Route
            path="/category/:categoryUrl?/:productId?"
            component={CategoryPageLayout}
          />
          <Route path="/about" component={AboutPageLayout} />
          <Route path="/signIn_register" component={SignInRegister} />
          <Redirect to="/" />
        </Switch>
      </PageLayout>
      <Footer />
    </>
  );
}

export default App;
