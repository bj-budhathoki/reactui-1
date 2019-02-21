import React from "react";
import { CardWrapper, CardHeader, CardBody, CardFooter } from "./CardStyles";
import img from "../../assets/img/bicycle-3758313_640.png";
import { Button } from "../Button";
const Card = () => {
  return (
    <>
      <CardWrapper>
        <CardHeader>
          <img src={img} alt="cycle" />
        </CardHeader>
        <CardBody>
          <p className="title">superbike aldor 2019</p>
          <p className="rating">star</p>
          <p className="description">short description here</p>
        </CardBody>
        <CardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </CardFooter>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <img src={img} alt="cycle" />
        </CardHeader>
        <CardBody>
          <p className="title">superbike aldor 2019</p>
          <p className="rating">star</p>
          <p className="description">short description here</p>
        </CardBody>
        <CardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </CardFooter>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <img src={img} alt="cycle" />
        </CardHeader>
        <CardBody>
          <p className="title">superbike aldor 2019</p>
          <p className="rating">star</p>
          <p className="description">short description here</p>
        </CardBody>
        <CardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </CardFooter>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <img src={img} alt="cycle" />
        </CardHeader>
        <CardBody>
          <p className="title">superbike aldor 2019</p>
          <p className="rating">star</p>
          <p className="description">short description here</p>
        </CardBody>
        <CardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </CardFooter>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <img src={img} alt="cycle" />
        </CardHeader>
        <CardBody>
          <p className="title">superbike aldor 2019</p>
          <p className="rating">star</p>
          <p className="description">short description here</p>
        </CardBody>
        <CardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </CardFooter>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <img src={img} alt="cycle" />
        </CardHeader>
        <CardBody>
          <p className="title">superbike aldor 2019</p>
          <p className="rating">star</p>
          <p className="description">short description here</p>
        </CardBody>
        <CardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </CardFooter>
      </CardWrapper>
      <CardWrapper>
        <CardHeader>
          <img src={img} alt="cycle" />
        </CardHeader>
        <CardBody>
          <p className="title">superbike aldor 2019</p>
          <p className="rating">star</p>
          <p className="description">short description here</p>
        </CardBody>
        <CardFooter>
          <p>$100</p>
          <Button btnBackground="#EF8216">BUY</Button>
        </CardFooter>
      </CardWrapper>
    </>
  );
};
export default Card;
