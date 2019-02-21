import styled from "styled-components";
import { colors, spacing, fonts } from "../../uitls";
export const HeroWrapper = styled.section`
background-image:url('${props => props.bg}');
width:100%;
height:90vh;
background-size:cover;
background-position:center;
display:flex;
justify-content:center;
flex-direction:column;
padding-left:${spacing.paddingMedium};
`;

export const HeroTitle = styled.h1`
  color: ${colors.secondaryColor};
  text-transform: capitalize;
  letter-spacing: 0.2rem;
  font-size: ${fonts.headline.xlargeHeadline};
  color: ${colors.primaryColor};
  letter-spacing: 0.2rem;
`;
export const HeroSubTitle = styled.h4`
  color: ${colors.secondaryColor};
  font-size: ${fonts.size.large};
  font-weight: ${fonts.weights.regular};
  margin-top: -${spacing.marginSemiSmall};
  text-transform: capitalize;
  letter-spacing: 0.2rem;
`;

export const HeroText = styled.p`
  width: 40%;
  color: ${colors.secondaryColor};
  font-size: ${fonts.size.xSmall};
  font-weight: ${fonts.weights.regular};
  word-break: break-all;
  letter-spacing: 0.1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  button:hover {
    cursor: pointer;
  }
  span {
    color: ${colors.secondaryColor};
    font-size: ${fonts.size.medium};
    font-weight: ${fonts.weights.regular};
  }
`;
export const ShowcaseSection = styled.section``;
