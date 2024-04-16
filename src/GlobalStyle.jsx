import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
}

body{
    background-color: #181818;
    color: white;
}

h1{
    font-size: clamp(1.5rem, 10vw, 3rem);
}
h2, h3{
    font-size: clamp(1.2rem, 10vw, 2rem); 
}

p{
    font-size: clamp(1rem, 10vw, 1.5rem); 
}

a {
    color: white;
    text-decoration: none;
}
`;
