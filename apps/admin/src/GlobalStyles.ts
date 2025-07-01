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

    .ql-formats {
      margin: 0px !important
    }

    .ql-container , .ql-toolbar {
      border-color: #E9EAF0  !important
    }

    .ql-toolbar {
      border-top: none !important
    }
  `
);
