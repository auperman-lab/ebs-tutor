import { createStyles } from "antd-style";

export const useStyles = createStyles(() => ({
  container: {
    width: "100%",
    height: "100%",
    minHeight: 300,
  },
  column: {
    height: "100%",
  },
  flexColumn: {
    flexGrow: 1,
    height: "100%",
    flexDirection: "column",
  },

}));
