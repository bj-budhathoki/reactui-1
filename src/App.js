import React, { Component } from "react";
import AppStyles from "./AppStyles";
import Home from "./containers/Home";
class App extends Component {
  render() {
    return (
      <>
        <AppStyles />
        <Home />
      </>
    );
  }
}

export default App;
