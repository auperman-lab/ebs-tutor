import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    width: '100%',
    backgroundColor: token.colorBgContainer,
  },

  mainHeader:{
    width: '100%',
    height: "90px",
    padding: `${token.paddingLG}px 3%`,
  },

  headerLogo: {
    border: 0,
    boxShadow: 'none',
    padding: 0,
  },

  headerTitle: {
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeHeading3,
  },

  search: {
    minWidth: 300,
  },

  button: {
    backgroundColor: token.colorBgBase,
    minWidth: 48,
    minHeight: 48,
  },

  avatar: {
    minWidth: 48,
    minHeight: 48,
  },

  menu: {
    borderBottom: 'none',
    lineHeight: '46px',
  },
}));
