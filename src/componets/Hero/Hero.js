import React from "react";
import { HeroWrapper, HeroTitle, HeroSubTitle, HeroText } from "./Herostyles";
import bg from "../../assets/img/header.jpg";
const Hero = () => {
  return (
    <HeroWrapper bg={bg}>
      <HeroTitle>perfection</HeroTitle>
      <HeroSubTitle>in every shape</HeroSubTitle>
      <HeroText>
        Our brand new Fishbite Superbike Express 2018 with perfection in every
        detail and would blow your mind INSTANTLY!
      </HeroText>
    </HeroWrapper>
  );
};

export default Hero;
