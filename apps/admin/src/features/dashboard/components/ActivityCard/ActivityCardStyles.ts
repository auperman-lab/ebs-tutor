import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css, token }) => ({
  wrapper: css`
    background-color: #fff;
    min-height: 420px;
    height: 100%;
    width: 100%;
  `,
  activityHeader:css`
    padding: 16px 20px;

  `,
  iconCircle: css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${token.colorPrimary};
  `,
  icon: css`
    color: ${token.colorPrimary};
    background-color: ${token.colorWhite};
  `
}));
