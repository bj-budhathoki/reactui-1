import React from "react";
import styled from "styled-components";
const ButtonWrepper = styled.button`
  display: block;
  padding: 1rem 2rem;
  margin-right: 2rem;
  outline: 0;
  color: ${props => (props.btnColor ? props.btnColor : "inherit")};
  background: ${props =>
    props.btnBackground ? props.btnBackground : "transparent"};
  border: ${props => (props.btnBorder ? props.btnBorder : 0)};
  &:hover {
    cursor: pointer;
  }
`;
export default ButtonWrepper;
