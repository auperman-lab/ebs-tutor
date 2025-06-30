import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  sidebar: {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
  },

  flexContainer: {
    height: '100vh',
  },

  logoContainer: {
    margin: `${token.marginMD}px ${token.marginLG}px`,
  },

  logo: {
    color: token.colorBgBase,
    lineHeight: token.lineHeightHeading5,
    fontWeight: token.fontWeightStrong,
  },

  divider: {
    borderColor: '#363B47',
  },

  logOut: {
    marginBottom: token.marginLG,
    color: '#8C94A3',
    backgroundColor: '#1D2026',
    border: 'none',
    justifyContent: 'flex-start',
    paddingLeft: token.paddingLG,
  },
}));
