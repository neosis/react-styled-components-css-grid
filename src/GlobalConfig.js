import {createGlobalStyle} from "styled-components";

const GlobalDefault = createGlobalStyle`
*,
*::after,
*::before {
margin: 0;
padding: 0;
box-sizing: inherit;
}

html {
box-sizing: border-box;
//Font size set to 62.5% so that 1 rem = 10px
font-size: 62.5%;

@media(max-width: 900px){
font-size: 55.5%;
}

@media(max-width: 700px){
font-size: 45.5%;
}

@media(max-width: 400px){
font-size: 38.5%;
}

@media(max-width: 250px){
font-size: 30%;
}
}

body {
//font-family: 'Josefin Sans';
font-family: Nunito;
font-size: 1.7rem;
line-height: 1.6;
font-weight: 300;
}
`;
export default GlobalDefault
