import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  notFoundPage: {
    gap: '5%',
    width: '100%',
    height: 'calc(100vh - 88px)',
    [responsive.md]: {
      flexDirection: 'column',
      alignContent: 'center',
      gap: 0,
    },
  },
  textBlock: {
    padding: 10,
    maxWidth: 500,
    [responsive.md]: {
      alignContent: 'center',
    },
  },

  error: {
    fontSize: 80,
    color: '#E9EAF0',
    lineHeight: 1,
    fontWeight: 600,
  },

  errorSubText: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 1.1,
    color: '#1D2026',
    paddingBottom: 24,
  },

  errorMessage: {
    color: '#4E5566',
    fontSize: 20,
    lineHeight: 1.6,
  },

  Button: {
    width: 135,
    marginTop: 32,
  },

  img: {
    maxHeight: 'calc(100vh - 88px)',
    objectFit: 'contain',
    [responsive.md]: {
      width: '100%',
    },
  },
}));
