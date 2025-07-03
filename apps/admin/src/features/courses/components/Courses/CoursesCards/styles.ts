import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  cover: {
    objectFit: "cover",
  },

  price: {
    color: token.colorPrimary,
    fontSize: token.fontSizeXL,
    fontWeight: token.fontWeightStrong,
    textAlign: "center",
  },

  tag: {
    width: "fit-content",
    backgroundColor: token.secondary.secondary100,
    color: token.secondary.secondary700,
    fontSize: token.fontSizeSM,
    marginBottom: 8,
    border: 0,
  },
  emptyTag: {
    height: "30px",
    minHeight: "30px",
  },

  title: {
    height: "24px",
    overflowY: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: token.fontSizeLG,

  },

  divider: {
    width: "calc(100% + 32px)",
    marginInline: "-16px",
  },

  text: {
    fontWeight: 500,
  },
  tagContainer: {

    overflowX: "scroll",
    width: "100%",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    paddingLeft: "10px",

    "&::-webkit-scrollbar": {
      display: "none",
    },

  },


}));

