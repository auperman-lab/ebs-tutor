import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  wrapper: {
    marginTop: token.marginLG,
    marginBottom: token.marginLG,
  },
  container: {
    [responsive.md]: {
      flexDirection: 'column',
    },
  },
  title: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
    textAlign: 'start',
    width: '100%',
  },
}));
