import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token, responsive }) => ({
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    height: 100,
  },

  headerWrapper: {
    width: "100%",
    height: "100%",
  },

  button: {
    backgroundColor: token.colorBgBase,
    border: "none",
  },
  avatar: {
    minWidth: 48,
    minHeight: 48,
  },
}));
