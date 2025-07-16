import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  loginFormContainer: {
    width: '100%',
    background: token.colorWhite,
  },

  loginFormWrapper: {
    maxWidth: '600px',
    width: '100%',
  },

  heading: {
    textAlign: 'center',
    color: token.colorText,
  },

  loginOptions: {
    [responsive.xs]: {
      flexDirection: 'column',
    },
  },
}));
