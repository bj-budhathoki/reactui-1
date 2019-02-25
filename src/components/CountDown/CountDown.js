import React from "react";
import img from "../../assets/img/header.jpg";
import styled from "styled-components";
import { Button } from "../Button";
import { colors, fonts, spacing } from "../../uitls";
const CountDownWrapper = styled.div`
  background: url('${img}');
  height: 30rem;
  background-size: cover;
  background-position: center center;
  display:flex;
justify-content: space-between;
align-items:center;
padding:3rem;
`;
const CountDownTitle = styled.div`
  h2 {
    color: ${colors.secondaryColor};
    font-size: ${fonts.headline.largeHeadline};
    text-transform: uppercase;
    span {
      color: ${colors.primaryColor};
    }
  }
  p {
    color: ${colors.secondaryColor};
    text-transform: capitalize;
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
`;
const CountDownShow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1rem;
  color: ${colors.secondaryColor};
  text-transform: uppercase;

  .seconds {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${colors.primaryColor};
    font-size: ${fonts.size.large};
    font-weight: bold;
    p {
      font-size: ${fonts.size.semiRegular};
      font-weight: bold;
    }
  }
`;
const TimeZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${fonts.size.large};
  font-weight: bold;
  p {
    font-size: ${fonts.size.semiRegular};
    font-weight: bold;
  }
`;
const CountDown = () => {
  return (
    <CountDownWrapper>
      <CountDownTitle>
        <h2>
          flash <span>sale</span>
        </h2>
        <p>fishbite superbike express 2019</p>
        <Button
          btnBackground={colors.primaryColor}
          btnColor={colors.secondaryColor}
        >
          BUY NOW
        </Button>
      </CountDownTitle>
      <CountDownShow>
        <TimeZone className="time-zone">
          <h2>29</h2>
          <p>day</p>
        </TimeZone>
        <TimeZone className="time-zone">
          <h2>59</h2>
          <p>hours</p>
        </TimeZone>
        <TimeZone className="time-zone">
          <h2>59</h2>
          <p>minutes</p>
        </TimeZone>
        <div className="seconds">
          <h2>59</h2>
          <p>seconds</p>
        </div>
      </CountDownShow>
    </CountDownWrapper>
  );
};
export default CountDown;
