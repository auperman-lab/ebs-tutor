import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    backgroundColor: token.colorWhite,
    padding: token.paddingLG,
    paddingLeft: 0,
  },
}));
