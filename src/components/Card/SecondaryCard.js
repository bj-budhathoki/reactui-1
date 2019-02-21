import React from "react";
import {
  SecondaryCardWrapper,
  SecondaryCardHeader,
  SecondaryCardBody,
  SecondaryCardFooter,
  SecondaryCardTop
} from "./SecondaryCardStyles";
import img from "../../assets/img/bicycle.svg";
import { Button } from "../Button";
const SecondaryCard = () => {
  return (
    <>
      <SecondaryCardWrapper>
        <SecondaryCardTop>
          <SecondaryCardHeader>
            <img src={img} alt="cycle" />
          </SecondaryCardHeader>
          <SecondaryCardBody>
            <p className="title">superbike aldor 2019</p>
            <p className="rating">star</p>
            <p className="description">short description here</p>
          </SecondaryCardBody>
        </SecondaryCardTop>
        <SecondaryCardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </SecondaryCardFooter>
      </SecondaryCardWrapper>
      <SecondaryCardWrapper>
        <SecondaryCardTop>
          <SecondaryCardHeader>
            <img src={img} alt="cycle" />
          </SecondaryCardHeader>
          <SecondaryCardBody>
            <p className="title">superbike aldor 2019</p>
            <p className="rating">star</p>
            <p className="description">short description here</p>
          </SecondaryCardBody>
        </SecondaryCardTop>
        <SecondaryCardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </SecondaryCardFooter>
      </SecondaryCardWrapper>
      <SecondaryCardWrapper>
        <SecondaryCardTop>
          <SecondaryCardHeader>
            <img src={img} alt="cycle" />
          </SecondaryCardHeader>
          <SecondaryCardBody>
            <p className="title">superbike aldor 2019</p>
            <p className="rating">star</p>
            <p className="description">short description here</p>
          </SecondaryCardBody>
        </SecondaryCardTop>
        <SecondaryCardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </SecondaryCardFooter>
      </SecondaryCardWrapper>
      <SecondaryCardWrapper>
        <SecondaryCardTop>
          <SecondaryCardHeader>
            <img src={img} alt="cycle" />
          </SecondaryCardHeader>
          <SecondaryCardBody>
            <p className="title">superbike aldor 2019</p>
            <p className="rating">star</p>
            <p className="description">short description here</p>
          </SecondaryCardBody>
        </SecondaryCardTop>
        <SecondaryCardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </SecondaryCardFooter>
      </SecondaryCardWrapper>
    </>
  );
};
export default SecondaryCard;
