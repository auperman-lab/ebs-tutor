import { createGlobalStyle } from 'antd-style';

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    body, 
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      margin: 0
    }
  `
);
