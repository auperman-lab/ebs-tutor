import { createStyles } from "antd-style";

export const useStyles = createStyles(({  token }) => ({
  wrapper: {
    backgroundColor: token.colorWhite,
    minHeight: 420,
    height: "100%",
    width: "100%",
  },

  notificationContainer: {
    overflow: "hidden",
  },
  notificationItemWrapper: {
    padding: "12px 20px"
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: token.colorPrimary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: token.colorPrimary,
    backgroundColor: token.colorWhite,
  },

  nameText: {
    fontWeight: token.fontWeightStrong,
  },

  secondaryText: {
    color: token.colorInfo,
  },


  textParagraph: {
    margin: 0,
  },
}));
