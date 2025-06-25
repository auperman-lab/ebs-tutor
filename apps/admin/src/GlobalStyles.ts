import { createGlobalStyle } from 'antd-style';

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => `
    @media (max-width: 576px) {
      .ant-form-item {
        margin-bottom: 0px;
      }
    }
    
    .ant-breadcrumb-separator {
      margin: 0px 8px 0px 8px !important
    }
  `
);
