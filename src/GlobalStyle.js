import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    background: rgb(230, 230, 230);
    font-family: "Lato", sans-serif;
    word-break: break-word;
  }
`;
