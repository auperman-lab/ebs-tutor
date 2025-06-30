import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }, { width }: { width: number }) => ({

  wrapper: {
    padding: "16px 20px",
  },
  title: {
    fonSize: token.fontSizeLG,
    fontWeight: token.fontWeightStrong,

  },

  text: {
    fontSize: token.fontSizeSM,
  },

  colorDot: {
    borderRadius: "50%",
    width: 10,
    height: 10,
    flexShrink: 0,
  },

  selectWidth:{
    width: width,
  },

  noMarginDivider: {
    margin: 0,
  },

}));
