import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, responsive }) => ({
  header: css`
    border-bottom: 1px solid #eee;
    padding: 0 15%;
    height: 88px;
    background-color: white;
  `,

  headerComponentsWrapper: css`
    width: 100%;
    height: 100%;
  `,

  createAccountText: css`
    display: block;
    text-align: center;

    ${responsive.xs} {
      display: none;
    }
  `,

  headerLogo: css`
    border: 0;
    box-shadow: none;

    &:hover {
      background: none !important;
      box-shadow: none !important;
    }
  `,

  headerTitle: css`
    /* add styles as needed */
  `,

  createAccountWrapper: css`
    color: black;
  `,

  createAccountButton: css`
    background-color: #FFEEE8;
    color: #FF6636;
    border: 0;
  `,
}));
