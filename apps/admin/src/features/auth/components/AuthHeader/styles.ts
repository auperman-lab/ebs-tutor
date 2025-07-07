import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ responsive }) => ({
  header: {
    borderBottom: '1px solid #eee',
    padding: '0 15%',
    height: 88,
    backgroundColor: 'white',
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
    ':hover': {
      background: 'none !important',
      boxShadow: 'none !important',
    },
  },

  createAccountWrapper: {
    color: 'black',
  },

  createAccountButton: {
    backgroundColor: '#FFEEE8',
    color: '#FF6636',
    border: 0,
  },
}));
