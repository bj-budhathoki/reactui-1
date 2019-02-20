import React, { Component } from "react";
import AppStyles from "./AppStyles";
import Hero from "./containers/Hero";
class App extends Component {
  render() {
    return (
      <>
        <AppStyles />
        <Hero />
      </>
    );
  }
}

export default App;
