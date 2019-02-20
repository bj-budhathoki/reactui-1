import { createGlobalStyle } from "styled-components";
const AppStyles = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit; }
html{
    font-size:62.5%;
}
body {
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
 }
`;
export default AppStyles;
