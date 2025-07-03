import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  registerContainer: {
    height: "calc(100vh - 88px)",
    width: "100%",
    backgroundColor: token.colorWhite,
  },
}));
