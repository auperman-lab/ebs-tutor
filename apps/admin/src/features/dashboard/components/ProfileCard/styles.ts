import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, responsive }) => ({
  wrapper: {
    backgroundColor: token.secondary.secondary900,
    height: "fit-content",
    width: "100%",
    padding: 40,
    color: token.colorWhite,
    [responsive.xl]: {
      padding: 20,
      flexDirection: "column",
      gap: 20,
    },
  },

  avatarWrapper: {
    height: "100%",
    width: "100%",
    maxWidth: 300,
    color: token.colorWhite,
  },

  progressWrapper: {
    height: "100%",
    [responsive.xl]: {
      flexDirection: "column",
    },
  },

  downButton: {
    border: 0,
    backgroundColor: "#FFFFFF1F",
    padding: 0,
    aspectRatio: 1,
  },

  headerText: {
    fontSize: token.fontSizeXXL
  },
  secondaryText:{
    whiteSpace: "nowrap",

    fontSize: token.fontSize,
    color: token.colorInfo
  },
  percentText: {
    fontSize: token.fontSizeLG,
    fontWeight: token.fontWeightStrong,
    color: token.colorWhite

  }
}));
