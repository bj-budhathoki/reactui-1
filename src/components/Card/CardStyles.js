import styled from "styled-components";
import { colors, spacing, fonts } from "../../uitls";
export const CardWrapper = styled.div`
  width:29rem;
  min-height: 20rem;
  border: 0.1rem solid ${colors.lightGrey};
  display:flex;
  flex-direction:column;
  margin-bottom:1rem;
  /* background: ${colors.sitelightGrey}; */
  &:hover{
      cursor:pointer;
      box-shadow:0 0 2rem  ${colors.siteGrey}
`;
export const CardHeader = styled.div`
  background: url('${props => props.bg}');
  height: 25rem;
  background-size:cover;
  background-repeat:no-repeat;
background-position:center center;
img{
    width:100%;
    height:100%;
}
`;
export const CardBody = styled.div`
  min-height: 10rem;
  padding: 0rem ${spacing.paddingXsmall};
  margin-top:0.5rem;
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

export const CardFooter = styled.div`
  min-height: 10rem;
  padding: 0rem ${spacing.paddingXsmall};
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${colors.primaryColor};
    font-weight: ${fonts.weights.bold};
  }
  button {
    color: ${colors.secondaryColor};
    font-weight: ${fonts.weights.bold};
  }
`;
