import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, css, responsive }, color: string) => ({
  wrapper: css`
    background-color: white;
    height: 420px;
    width: 100%;
  `,

}));
