import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  wrapper: css`
    background-color: white;
    min-height: 420px;
    height: 100%;
    width: 100%;
  `,

  barchartContainer: css`
    width:100%;
    height: 70%;
  `,

  textContainer: css`
    width:100%;
    height: 30%;
    margin-left: 20px;
  `


}));
