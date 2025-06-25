import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
    padding: `${token.paddingLG}px 10% ${token.paddingLG}px 10%`,
    height: 100,
  },

  headerWrapper: {
    width: "100%",
    height: "100%",
  },

  button: {
    backgroundColor: token.colorBgBase,
    border: "none",
    minWidth: 48,
    minHeight: 48,
  },
  avatar: {
    minWidth: 48,
    minHeight: 48,
  },
}));
