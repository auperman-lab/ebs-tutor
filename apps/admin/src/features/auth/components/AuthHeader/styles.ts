import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  header: {
    borderBottom: '1px solid #eee',
    padding: '0 15%',
    height: 88,
    backgroundColor: token.colorWhite,
  },

  headerComponentsWrapper: {
    width: '100%',
    height: '100%',
  },

  createAccountText: {
    display: 'block',
    textAlign: 'center',
    [responsive.xs]: {
      display: 'none',
    },
  },

  headerLogo: {
    border: 0,
    boxShadow: 'none',
  },

  createAccountWrapper: {
    color: 'black',
  },

  createAccountButton: {
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
    border: 0,
  },
}));
