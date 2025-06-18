import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, responsive }) => ({
  loginPage: css`
    height: calc(100vh - 88px);
    background-color: ${token.colorWhite};

    ${responsive.md} {
      flex-direction: column;
    }
  `,

  imageContainer: css`
    width: 100%;
    height: 100%;
    background-color: #ebebff;

    img {
      width: 100%;
      height: auto;
    }

    ${responsive.md} {
      display: none;
    }
  `,
}));
