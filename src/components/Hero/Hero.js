import React from "react";
import {
  HeroWrapper,
  HeroTitle,
  HeroSubTitle,
  HeroText,
  ButtonWrapper
} from "./Herostyles";
import bg from "../../assets/img/header.jpg";
import { Button } from "../Button";
const Hero = () => {
  return (
    <>
      <HeroWrapper bg={bg}>
        <HeroSubTitle>in every shape</HeroSubTitle>
        <HeroText>
          Our brand new Fishbite Superbike Express 2018 with perfection in every
          detail and would blow your mind INSTANTLY!
        </HeroText>
        <ButtonWrapper>
          <Button btnBackground="#EF8216">
            <span>BUY NOW</span>
          </Button>
          <Button btnBorder="0.2rem solid #fff">
            <span>TAKE A LOOK</span>
          </Button>
        </ButtonWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
