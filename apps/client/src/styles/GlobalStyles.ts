import { createGlobalStyle } from 'antd-style';

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    .ql-formats {
      margin: 0px !important
    }

    .ql-container , .ql-toolbar {
      border-color: #E9EAF0  !important
    }

    .ql-toolbar {
      border-top: none !important
    }

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
