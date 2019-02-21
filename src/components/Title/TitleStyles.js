import styled from "styled-components";
import { colors, fonts, spacing } from "../../uitls";
export const TitleContainer = styled.div`
display:flex;
justify-content:space-between;
  /* background: ${colors.primaryColor}; */
  .title {
    color: ${colors.siteBlack};
    font-size: ${fonts.size.medium};
    text-transform: uppercase;
    border-bottom:0.3rem solid red;
    width:15%;
  }
  .icon{
    color: ${colors.siteBlack};
    font-size: ${fonts.size.medium};
    text-transform: uppercase;

  }
`;
