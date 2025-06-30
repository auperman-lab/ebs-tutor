import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    backgroundColor: token.colorWhite,
    minHeight: 420,
    height: "100%",
    width: "100%",
  },

  barchartContainer: {
    width: "100%",
    height: "70%",
  },

  textContainer: {
    width: "100%",
    height: "30%",
    marginLeft: 20,
  },

  viewsTitle: {
    fontSize: token.fontSizeXXL,
    margin: 0,
  },

  viewsSubtitle: {
    fontSize: token.fontSize,
    color: token.colorInfo,
    margin: 0,
  },

  chartSection: {
    padding: 8,
    height: "100%",
  },
}));
