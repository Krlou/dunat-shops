import React, { Component } from "react";

import Backdrop from "./components/Backdrop";
import Header from "./components/Header";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import PcsSava from "./components/PscSava";
import ShopSava from "./components/ShopSava";
import JcsBezdan from "./components/JcsBezdan";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    isMobile: false,
    isSerbian: true
  };

  openMobileNav = () => {
    this.setState({ isMobile: true });
  };

  closeBackdrop = () => {
    this.setState({ isMobile: false });
  };

  handleChangedLang = lang => {
    let currentLang = lang === "en" ? false : true;
    this.setState({ isSerbian: currentLang });
  };

  render() {
    return (
      <BrowserRouter>
        {this.state.isMobile && <Backdrop clicked={this.closeBackdrop} />}
        <Header
          isMobile={this.state.isMobile}
          toggleMenu={this.openMobileNav}
          clicked={this.closeBackdrop}
          changeLang={this.handleChangedLang}
          isSerbian={this.state.isSerbian}
        />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <MainPage isSerbian={this.state.isSerbian} />}
          />
          <Route
            path="/pcs-sava"
            render={() => <PcsSava isSerbian={this.state.isSerbian} />}
          />
          <Route
            path="/shop-sava"
            render={() => <ShopSava isSerbian={this.state.isSerbian} />}
          />
          <Route
            path="/jcs-bezdan"
            render={() => <JcsBezdan isSerbian={this.state.isSerbian} />}
          />
        </Switch>
        <Partners isSerbian={this.state.isSerbian} />
        <Contact isSerbian={this.state.isSerbian} />
      </BrowserRouter>
    );
  }
}

export default App;
