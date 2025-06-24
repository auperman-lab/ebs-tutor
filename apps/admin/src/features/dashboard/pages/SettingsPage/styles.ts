import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, responsive }) => ({
  bottomPart: {
    width: "80%",
    [responsive.lg]: {
      flexDirection: "column",
    },
  },
}));
