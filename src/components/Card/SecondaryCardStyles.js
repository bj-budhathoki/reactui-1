import styled from "styled-components";
import { colors, spacing, fonts } from "../../uitls";
export const SecondaryCardWrapper = styled.div`
  width:100%;
  min-height: 20rem;
  border: 0.1rem solid ${colors.lightGrey};
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  margin:1rem 0rem;
  /* background: ${colors.sitelightGrey}; */
  &:hover{
      cursor:pointer;
      box-shadow:0 0 2rem  ${colors.siteGrey}
  }
  @media(min-width:480px){
        width:50%;
      }
`;

export const SecondaryCardTop = styled.div`
  display: flex;
  justify-content: center;
`;

export const SecondaryCardHeader = styled.div`
  background: url('${props => props.bg}');
flex:1;
  background-size:cover;
  background-repeat:no-repeat;
background-position:center center;
img{
    width:100%;
    height:100%;
}
`;
export const SecondaryCardBody = styled.div`
  min-height: 10rem;
  padding: 0rem ${spacing.paddingXsmall};
  margin-top:0.5rem;
  flex:1;
  .title{
      color:${colors.siteBlack}
      text-transform:capitalize;
  }
  .rating{
    color:${colors.primaryColor}
  }
  .description{
    color:${colors.siteGrey};
  }
`;

export const SecondaryCardFooter = styled.div`
  min-height: 10rem;
  padding: 0rem ${spacing.paddingXsmall};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    color: ${colors.primaryColor};
    font-weight: ${fonts.weights.bold};
    margin-right: 1rem;
  }
  button {
    color: ${colors.secondaryColor};
    font-weight: ${fonts.weights.bold};
  }
`;
