import { createStyles } from "antd-style";

export const useStyles = createStyles(({ }) => ({
  wrapper: {
    backgroundColor: "white",
    minHeight: 480,
    height: "100%",
    width: "100%",
  },

  ratingScore: {
    maxWidth: "40%",
    width: "100%",
    gap: 5,
    height: "100%",
    backgroundColor: "#FFF2E5",
  },

  ratingGraph: {
    width: "60%",
    height: "100%",
    aspectRatio: "2 / 1",
    textAlign: "center",
  },

  rateItemContainer: {
    width: "100%",
    padding: "0 0 8px 0",
    gap: 12,
  },

  nowrapText: {
    whiteSpace: "nowrap",
  },

  content: {
    height: "100%",
    padding: 20,
  },

  divider: {
    margin: 0,
  },

  ratingList: {
    height: "fit-content",
    padding: 20,
    width: "100%",
  },
}));
