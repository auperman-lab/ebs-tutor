import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  container: {
    width: "80%",
  },

  price: {
    color: token.colorPrimary,
    fontSize: token.fontSizeXL,
    fontWeight: token.fontWeightStrong,
    textAlign: "center",
  },

  tag: {
    width: "fit-content",
    marginBottom: 8,
  },

  title: {
    fontSize: token.fontSizeLG,
  },

  divider: {
    width: "calc(100% + 32px)",
    marginInline: "-16px",
  },

  text: {
    fontWeight: 500,
  },
}));
