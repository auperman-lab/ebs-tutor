import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, responsive }) => ({
  footer: {
    paddingBottom: token.paddingMD,
    paddingTop: token.paddingMD,
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: token.colorBgBase,
  },
}));
