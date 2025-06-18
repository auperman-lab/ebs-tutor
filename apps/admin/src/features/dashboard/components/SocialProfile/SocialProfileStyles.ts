import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    width: "80%",
    padding: 40,
    backgroundColor: "white",
  },
  heading: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
    color: token.colorTextHeading,
    lineHeight: token.lineHeightHeading1,

  },
  saveButton: {
    // marginTop: 94,
  },
}));
