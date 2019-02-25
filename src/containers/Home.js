import React, { Component } from "react";
import PropTypes from "prop-types";
import { Herocomponent } from "../components/Hero";
import { CardList } from "../components/CardList";
import { CountDown } from "../components/CountDown";
export class Hero extends Component {
  render() {
    return (
      <>
        <Herocomponent>HeroComponent</Herocomponent>
        <CardList />
        <CountDown />
      </>
    );
  }
}

export default Hero;
