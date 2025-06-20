import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, responsive }) => ({
  loginFormContainer: css`
    width: 100%;
    background: ${token.colorWhite};
  `,

  loginFormWrapper: css`
    max-width: 400px;
    width: 100%;
  `,

  heading: css`
    text-align: center;
    margin-bottom: 40px;
    color: ${token.colorText};
  `,

  loginOptions: css`
    ${responsive.xs} {
      flex-direction: column;
    }
  `,
}));
