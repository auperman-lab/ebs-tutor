import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  loginPage: {
    height: 'calc(100vh - 88px)',
    backgroundColor: token.colorWhite,

    [responsive.md]: {
      flexDirection: 'column',
    },
  },

  imageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ebebff',

    '& img': {
      width: '100%',
      height: 'auto',
    },

    [responsive.md]: {
      display: 'none',
    },
  },
}));
