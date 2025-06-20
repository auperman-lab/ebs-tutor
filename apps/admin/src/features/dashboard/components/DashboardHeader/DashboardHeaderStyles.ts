import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, responsive }) => ({
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    display: "flex",
    width: "100%",
    alignItems: "center",
    color: "black",
  },
}));
