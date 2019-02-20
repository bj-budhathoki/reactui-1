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
  font-size: ${fonts.headline.largeHeadline};
  font-weight: ${fonts.weights.regular};
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
  width: 30%;
  color: ${colors.secondaryColor};
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weights.regular};
  word-break: break-all;
  letter-spacing: 0.2rem;
`;
