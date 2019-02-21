import styled from "styled-components";
import { colors, spacing } from "../../uitls";

export const CardlistWrapper = styled.div`
  padding: 0 2rem;
  margin: 3rem 0;
  @media (min-width: 480px) {
    padding: 0 8rem;
  }
`;
export const CardsWrapper = styled.div`
  /* background: ${colors.primaryColor}; */

display:flex;
justify-content:space-between;
align-content:space-between;
flex-wrap:wrap;
`;
