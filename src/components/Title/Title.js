import React from "react";
import { TitleContainer } from "./TitleStyles";
const Title = ({ title, titleIcon }) => (
  <TitleContainer>
    <h4 className="title">{title}</h4>
    <h4 className="icon">icon</h4>
  </TitleContainer>
);
export default Title;
