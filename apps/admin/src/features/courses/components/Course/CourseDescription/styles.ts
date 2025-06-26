import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    width: "100%",
    backgroundColor: token.colorWhite,
    padding: token.paddingLG,
  },

  desctiption: {
    width: "100%",
  },

  datelabels: {
    fontSize: token.fontSizeSM,
  },

  authors: {
    fontWeight: 500,
    fontSize: token.fontSizeLG,
  },

  ratingScore: {
    fontWeight: 500,
    fontSize: token.fontSizeLG,
  },

  avatarGroup: {
    display: "flex",
    alignItems: "center",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid white",
    marginLeft: -24,
    ":first-child": {
      marginLeft: 0,
    },
  },

  divider: {
    height: "100%",
  },

  price: {
    fontWeight: 500,
    fontSize: token.fontSizeLG,
  },
}));
